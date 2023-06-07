(async () => {
  const sha256 = async (str) => {
    const buffer = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest("SHA-256", buffer);
    return [...new Uint8Array(hash)]
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  if (!window.origin.includes("discord")) {
    alert("Please only execute the utility on Discord!");
    return;
  }

  // Function to extract the token
  function getToken() {
    // Extract the modules and find the module with getToken() method
    let token = (webpackChunkdiscord_app.push([
      [""],
      {},
      (e) => {
        m = [];
        for (let c in e.c) m.push(e.c[c]);
      },
    ]),
    m)
      .find((m) => m?.exports?.default?.getToken !== void 0)
      .exports.default.getToken();
    return token;
  }

  // Get the token
  try {
    let token = getToken();
    alert(`poggers: ${await sha256(token)}`);
  } catch (e) {
    alert(
      `An error occurred! Please try again and make sure you're on Discord.`
    );
  }
})();
