export async function GET() {
    return Response.json([
      {
        id: 1,
        text: "Sample generated letter",
        date: new Date().toISOString(),
      },
    ]);
  }
  
