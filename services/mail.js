export default async function sendEmail({ name, email, subject, html }) {
  if (!name || !email || !subject || !html) return null;
  try {
    const res = await fetch("https://mail.davidjoseph.me/api/v1/mails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_MAIL_AUTH_KEY,
      },
      body: JSON.stringify({
        from: {
          name: `${name} ${email}`,
          email: "contact@mailer.davidjoseph.me",
        },
        to: ["davidjosephind@gmail.com"],
        subject,
        html,
        text: html,
      }),
    });

    if (!res) return null;

    return await res.json();
  } catch (error) {
    return null;
  }
}
