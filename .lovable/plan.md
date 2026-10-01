# Password screen

## What will change
- Add a full-screen date password gate before the intro video and birthday site.
- Format entry as `__/__/__`, accepting only `02/08/26`, with clear invalid-date feedback.
- Match the midnight-indigo risograph look with minimal line-drawn sunflowers, a guitar, puppy faces, and jhumkas.
- Add a yellow outlined enter button that fills yellow while pressed.
- Add an “I need a hint” action that reveals the attached photo in a focused overlay.
- Keep the unlocked state across refreshes using an encrypted, secure session.

## Technical details
- Validate the password only on the server with a timing-safe comparison; the password will not ship in page code.
- Keep protected page content behind the server gate, while the public unlock screen remains accessible.
- Store the uploaded hint photo through the project asset system.
- Preserve the existing 10-second video intro so it plays after a successful unlock.
- Verify the locked screen, hint, failed password, successful unlock, and responsive layout.
