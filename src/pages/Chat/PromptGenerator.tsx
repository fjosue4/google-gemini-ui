import { ChangeEvent, useState } from 'react';
import Button from '@components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

interface AiResponse {
  candidates: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
}

function PromptGenerator() {
  const [prompt, setPrompt] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const { API_KEY } = useSelector((state: RootState) => state.user);

  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSendPrompt = async () => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data: AiResponse = await response.json();

      const aiAnswerText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

      setAiAnswer(aiAnswerText);
    } catch (error) {
      console.error('Error sending prompt:', error);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="prompt">Enter Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
        />
      </div>
      <div>
        <Button onClick={handleSendPrompt}>Send Prompt</Button>
      </div>
      <div>
        <h2>AI Answer:</h2>
        <p>{aiAnswer}</p>
      </div>
    </div>
  );
}

export default PromptGenerator;
