import localtunnel from "localtunnel";

const subdomain = process.env['TUNNEL_SUBDOMAIN'] ?? "test123";
const port = Number(process.env['TARGET_PORT']) ?? 3000;
const local_host = process.env['TARGET_HOST'] ?? "ncw_backend_demo";

(async () => {
  const tunnel = await localtunnel({ 
    port,
    subdomain,
    local_host,
  });

  if (!tunnel.url.startsWith(`https://${subdomain}`)) {
    throw new Error(`couldn't reserve tunnel subdomain "${subdomain}"`);
  }

  console.log("tunnel started on url: ", tunnel.url);

  tunnel.on('request', (info) => console.log("tunnel request:", info));
  tunnel.on('error', (err) => console.error("tunnerl error:", err))

  tunnel.on('close', () => {
    console.log("tunnel closed");
    process.exit(1);
  });
})();