import { Button, Grid, Loader, Text, TextInput } from "@mantine/core";
import { useRef, useState } from "react";
import RichTextEditor from "../../RichTextEditor";
import sendEmail from "../../../services/mail";
import { At, Rocket, User } from "tabler-icons-react";

export default function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const [message, setMessage] = useState("<p>Hi David,</p>");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const sendMessage = async () => {
    setLoading(true);

    const data = await sendEmail({
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      html: message,
    });

    setLoading(false);

    if (!data) {
      setError(true);
      return;
    }

    setSent(true);
  };

  return (
    <div>
      <Grid>
        <Grid.Col md={6} sm={12}>
          <TextInput
            label="Name"
            ref={nameRef}
            icon={<User size={18} />}
            placeholder="David Joseph"
          />
        </Grid.Col>
        <Grid.Col md={6} sm={12}>
          <TextInput
            label="Email"
            type="email"
            ref={emailRef}
            icon={<At size={18} />}
            placeholder="davidjosephind@gmail.com"
          />
        </Grid.Col>
        <Grid.Col md={12} sm={12}>
          <TextInput
            label="Subject"
            ref={subjectRef}
            placeholder="Let's build something together"
          />
        </Grid.Col>
      </Grid>
      <RichTextEditor
        mt="lg"
        controls={[
          ["bold", "italic", "underline"],
          ["h1", "h2", "h3", "h4", "h5", "h6"],
          ["unorderedList", "orderedList"],
          ["alignLeft", "alignCenter", "alignRight"],
          ["link"],
        ]}
        value={message}
        onChange={(value) => {
          setMessage(value);
        }}
      />
      <Text color="red" align="center" my="lg">
        {error ? "There was an error sending the email." : ""}
      </Text>
      <Text color="green" align="center" my="lg">
        {sent ? "The email was sent successfully!" : ""}
      </Text>
      {loading ? (
        <Loader style={{ margin: "0 auto", display: "block" }} />
      ) : (
        <Button
          variant="gradient"
          onClick={sendMessage}
          style={{ width: "6rem", margin: "1.25rem auto 0", display: "block" }}
          disabled={loading}
          leftIcon={loading ? "" : <Rocket size={18} />}
        >
          Send
        </Button>
      )}
    </div>
  );
}
