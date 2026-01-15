<script>
function kirim() {
  const link = document.getElementById("link").value
  const mode = document.getElementById("mode").value
  const wa   = document.getElementById("wa").value

  if(!link || !wa){
    alert("Link dan WA wajib diisi!")
    return
  }

  fetch("http://localhost:3000/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      apikey: "RISKY2026",
      wa: wa,
      text: `🎬 VIDEO DIPROSES\nMode: ${mode}\nLink: ${link}`
    })
  })
  .then(res => res.json())
  .then(data => alert(data.msg))
  .catch(() => alert("❌ Gagal konek ke server"))
}
</script>
