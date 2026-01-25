async function placeBet() {
  const response = await fetch("/placeBet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: "testUser",
      matchId: "match123",
      amount: 50
    })
  });

  const data = await response.json();
  alert(JSON.stringify(data));
}

