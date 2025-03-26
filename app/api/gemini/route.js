export async function POST(req) {
	try {
	  const { message } = await req.json();
	  const apiKey = process.env.GEMINI_API_KEY;
  
	  if (!apiKey) {
		return new Response(JSON.stringify({ error: "API key is missing" }), { status: 500 });
	  }
  
	  const response = await fetch(
		`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
		{
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			contents: [{ parts: [{ text: message }] }],
		  }),
		}
	  );
  
	  if (!response.ok) {
		const errorText = await response.text();
		return new Response(JSON.stringify({ error: `Gemini API Error: ${errorText}` }), { status: response.status });
	  }
  
	  const data = await response.json();
	  return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
	  return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
	}
  }
  