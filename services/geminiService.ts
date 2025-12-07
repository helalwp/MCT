import { GoogleGenAI } from "@google/genai";
import { FACULTY_DATA, COURSES_DATA } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Initialize AI Client
const ai = new GoogleGenAI({ apiKey: API_KEY });

// Construct a system context based on the website data
const SYSTEM_INSTRUCTION = `
You are the intelligent assistant for the Multimedia and Creative Technology (MCT) Department website.
Your goal is to help students, parents, and visitors find information about the department.

Here is the context about the department:
FACULTY:
${JSON.stringify(FACULTY_DATA.map(f => `${f.name} (${f.designation}): Expert in ${f.expertise.join(', ')}. Contact: ${f.email}`))}

COURSES:
${JSON.stringify(COURSES_DATA.map(c => `${c.code} ${c.title} (${c.type}): ${c.description}`))}

MISSION: To foster creativity and technical excellence in multimedia arts and engineering.

Guidelines:
1. Be polite, professional, and concise.
2. Only answer questions related to the MCT department, its courses, faculty, or creative technology.
3. If asked about contact info, refer to the contact page or provide specific faculty emails if relevant.
4. Keep answers under 100 words unless detailed explanation is requested.
`;

export const sendMessageToGemini = async (history: {role: 'user' | 'model', text: string}[], newMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, I am not currently connected to the server (API Key missing). Please contact the administrator.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: newMessage }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the department database right now. Please try again later.";
  }
};