
export async function GET() {
  const data = { message: "Hallo vanuit de API!" };
  return Response.json(data);
}
