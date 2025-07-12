import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Aria Wang. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Hello, I am Aria Wang, a passionate software engineer with a focus on building innovative solutions. I have a strong background in full-stack development and enjoy working on projects that challenge my skills and creativity. My goal is to create impactful applications that enhance user experiences and drive business success.",
    };
  },
});
