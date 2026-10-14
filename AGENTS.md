<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Gate the birthday site with a server-validated encrypted session so the shared date password never ships to browsers.
- Use a same-origin public unlock route for the date check so its encrypted session cookie is committed before redirecting to the protected home route.
- Keep the unlock form hydration-gated; allow a direct home-page shortcut only on localhost and id-preview editing hosts, and skip the intro video there so editors can work immediately without changing the published password flow.
