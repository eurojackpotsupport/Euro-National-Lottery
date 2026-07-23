"use client";

import { useState } from "react";

export default function Page() {

  // ===== Support Request Form =====
  const [subject, setSubject] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // ===== Live Chat =====
  const [startedChat, setStartedChat] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [chatMessage, setChatMessage] = useState("");

  const [messages, setMessages] = useState<
    {
      sender: "support" | "user";
      text: string;
    }[]
  >([
    {
      sender: "support",
      text: "Hello 👋 Welcome to EuroMillions Premium Support. Please describe your issue below.",
    },
  ]);

  function sendRequest() {
    if (!subject.trim() || !requestMessage.trim()) {
      alert("Please fill in both Subject and Message.");
      return;
    }

    setSubject("");
    setRequestMessage("");
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  function startChat() {
    if (!email.trim() || !phone.trim()) {
      alert("Please enter your email and phone number.");
      return;
    }

    setStartedChat(true);
  }

  function sendMessage() {
    if (!chatMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: chatMessage,
      },
      {
        sender: "support",
        text: "✅ Thank you for contacting us. A member of our support team will contact you as soon as possible.",
      },
    ]);

    setChatMessage("");
  }

  return (
    <main className="min-h-screen bg-[#081B33] p-8">

      <div className="mx-auto max-w-7xl space-y-8">

        {/* Hero */}
        <section className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#102b52] to-[#0b1f3c] p-8">

          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-400">
            🎧 Premium Member Support
          </span>

          <h1 className="mt-5 text-4xl font-black text-white">
            Need Help?
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Our dedicated support team is available to assist you with your
            membership, account, draw information and any questions regarding
            your EuroMillions membership.
          </p>

        </section>

{/* Support Cards */}
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

  {/* Live Chat */}
  <div className="flex h-full flex-col rounded-2xl bg-[#102b52] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">

    {!startedChat ? (

      <>
        <div className="text-4xl">💬</div>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Live Support
        </h2>

        <p className="mt-3 text-slate-400">
          Verify your contact details before chatting with our support team.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-5 rounded-xl border border-slate-700 bg-[#081B33] px-4 py-3 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-4 rounded-xl border border-slate-700 bg-[#081B33] px-4 py-3 text-white outline-none"
        />

        <button
          onClick={startChat}
          className="mt-6 w-full rounded-xl bg-yellow-500 py-3 font-bold text-black transition hover:bg-yellow-400"
        >
          Start Chat
        </button>
      </>

    ) : (

      <>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              💬 Live Support
            </h2>

            <p className="text-green-400">
              🟢 Premium Member Support
            </p>

            <p className="text-xs text-slate-400">
              Average response time: 5–30 minutes
            </p>
          </div>
        </div>

        <div className="mt-6 h-72 flex-1 overflow-y-auto rounded-xl bg-[#081B33] p-4">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "user"
                  ? "text-right"
                  : "text-left"
              }`}
            >

              <div
                className={`inline-block max-w-[80%] rounded-xl px-4 py-3 ${
                  msg.sender === "user"
                    ? "bg-yellow-500 text-black"
                    : "bg-[#16345d] text-white"
                }`}
              >
                {msg.text}
              </div>

            </div>

          ))}

        </div>

        <div className="mt-4 flex gap-3">

          <input
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-slate-700 bg-[#081B33] px-4 py-3 text-white outline-none"
          />

          <button
            onClick={sendMessage}
            className="rounded-xl bg-yellow-500 px-6 font-bold text-black transition hover:bg-yellow-400"
          >
            Send
          </button>

        </div>

      </>

    )}

  </div>

  {/* Email Support */}
<div className="flex h-full flex-col rounded-2xl bg-[#102b52] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">

  <div className="text-4xl">📧</div>

  <h2 className="mt-4 text-2xl font-bold text-white">
    Email Support
  </h2>

  <p className="mt-3 flex-1 leading-7 text-slate-400">
    Send us an email and our support team will reply as soon as possible.
  </p>

<button
  onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=eurojackpot.support@gmail.com&su=Member%20Support%20Request&body=Hello%20Support%20Team,%0A%0AMembership%20ID:%0A%0AI%20need%20help%20with:%0A",
      "_blank"
    )
  }
  className="mt-auto w-full rounded-xl bg-yellow-500 py-3 font-bold text-black transition hover:bg-yellow-400"
>
  Send Email
</button>
</div>
{/* Help Center */}
<div className="flex h-full flex-col rounded-2xl bg-[#102b52] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">

  <div className="text-4xl">❓</div>

  <h2 className="mt-4 text-2xl font-bold text-white">
    Help Center
  </h2>

  <p className="mt-3 flex-1 leading-7 text-slate-400">
    Browse answers to the most frequently asked questions.
  </p>

  <button className="mt-auto w-full rounded-xl bg-yellow-500 py-3 font-bold text-black transition hover:bg-yellow-400">
    View FAQ
  </button>

</div>

</div>
        <section className="rounded-3xl bg-[#102b52] p-8">

  <h2 className="text-2xl font-bold text-white">
    Send Support Request
  </h2>

  <p className="mt-2 text-slate-400">
    Can't find your answer? Send a message to our support team.
  </p>

  <div className="mt-8 space-y-5">

    <input
  type="text"
  placeholder="Subject"
  value={subject}
  onChange={(e) => setSubject(e.target.value)}
  className="w-full rounded-xl border border-yellow-500/20 bg-[#081B33] px-5 py-4 text-white outline-none"
/>

    <textarea
  rows={6}
  placeholder="Describe your issue..."
  value={requestMessage}
  onChange={(e)=>setRequestMessage(e.target.value)}
  className="w-full resize-none rounded-xl border border-yellow-500/20 bg-[#081B33] px-5 py-4 text-white outline-none"
/>

    <button
  onClick={sendRequest}
  className="rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400"
>
  Send Request
</button>
{success && (
  <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
    ✅ Your support request has been sent successfully.

    <p className="mt-1 text-green-300">
      Our support team will contact you as soon as possible.
    </p>
  </div>
)}
  </div>

</section>


      </div>

    </main>
  );
}