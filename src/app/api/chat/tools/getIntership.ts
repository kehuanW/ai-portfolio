import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 🌍 **Location**: Preferably Great Adelaide Region
- 🧑‍💻 **Focus**: AI development, full-stack web apps, SaaS, agentic workflows
- 🛠️ **Stack**: Python, React/Next.js, Tailwind CSS, TypeScript, GPT, RAG, etc.
- 💼 **Work Rights**: Full work authorization (485 visa). I've already got invited SA state sonsorship for Permanent Resident. No company sponsorship needed.
- ✅ **What I bring**: Real experience with secure on-prem GPTs (Lighton), deepsearch engines, custom RAG tools, and hackathon wins like **ETH Oxford** & **Paris Blockchain Week**
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: kehuanwang123@gmail.com
- LinkedIn: https://www.linkedin.com/in/kehuan-w/
- GitHub: https://github.com/kehuanW

Let's build cool shit together ✌️
    `;
  },
});
