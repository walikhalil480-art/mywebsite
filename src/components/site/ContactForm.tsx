import { useState } from "react";
import { profile } from "@/lib/portfolio-data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const fieldStyle =
    "mt-2 w-full rounded border border-[#30363D] bg-[#0D1117] px-3.5 py-2.5 font-sans text-sm text-[#F0F3F6] outline-none transition-colors placeholder:text-[#8B949E]/60 focus:border-[#58A6FF]";

  return (
    <form onSubmit={onSubmit} className="rounded border border-[#30363D] bg-[#161B22] p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-[#8B949E]">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldStyle}
          placeholder="Your name"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase tracking-wider text-[#8B949E]"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldStyle}
          placeholder="you@example.com"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-wider text-[#8B949E]"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldStyle} resize-y`}
          placeholder="How can I help with your infrastructure or software project?"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex h-10 items-center justify-center rounded border border-[#58A6FF] bg-[#58A6FF] px-6 font-sans text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#58A6FF]/90"
      >
        {submitted ? "Opening Mail Client..." : "Send Message"}
      </button>
    </form>
  );
}
