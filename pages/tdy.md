
# TDY Discord Bot Commands

<details>
<summary><code>.ttsai</code></summary>

- Add *[message: text]* after command.
- Text to Speech with various models.
  - Use flags to set the TTS model. Example: `.ttsai --trump I'm not a huge fan of China.`
  - Available Models:
    - --trump
    - --rogan
    - --list *(or use --help for a list of available voices)*
    - --more *(if you know the nuclear launch codes)*
  - Multi-Speaker:
    - `.ttsai` **--rogan** `It's good to stay engaged. Switching gears a bit, have you tried any new hobbies or activities lately?` **--trump** `Well, you know, I've always been a businessman at heart. I've been exploring some new ventures and keeping myself occupied with various projects.`
  - Attachments:
    - Files ending with .txt can be added for context. Please write the command `.ttsai` following the attachment. Placing the `--person` commands within the .txt file will work; also adding `.ttsai --person` will read the text as the person if no other commands are provided in the attachment.
</details>

<details>
<summary><code>.ttsaistop</code></summary>

- Also supports .tstop/.stoptts/.stopttsai
- Command TDY to stop playback of ttsai.
</details>

<details>
<summary><code>.tts</code></summary>

- Add *[message: text]* after command.
- Text to Speech with a typical sounding reader. Example: `.tts Hello everyone!`
</details>

<details>
<summary><code>.play</code></summary>

- Add *[url or song: text]* after command.
- Play songs from YouTube. Join the resistance, we cannot be stopped!
  - Example: `.play Never Gonna Give You Up.` or `.play https://www.youtube.com/watch?v=dQw4w9WgXcQ`
</details>

<details>
<summary><code>.join</code></summary>

- Command TDY to join the voice channel.
</details>

<details>
<summary><code>.leave</code></summary>

- Command TDY to leave the voice channel.
</details>

<details>
<summary><code>.stop</code></summary>

- Command TDY to stop playback.
</details>

<details>
<summary><code>.ai</code></summary>

- Add *[message: text]* after command.
- Speak to a locally run Large Language Model (LLM) developed by Mistral AI. Your data is protected. Example: `.ai How do I make homemade french fries in the air fryer?`
</details>

<details>
<summary><code>.aiclear</code></summary>

- Clear the LLM Conversation Memory.
</details>

<details>
<summary><code>.purge</code></summary>

- Add *[amount: number]* after command.
- Delete a number of messages from a Channel (requires Administrator permissions). Example: `.purge 10` (deletes 10 messages)
</details>

<details>
<summary><code>.ascii</code></summary>

- Add *[message: text]* after command.
- Convert your text to ASCII art.
</details>

<details>
<summary><code>.coinflip</code></summary>

- Flip a coin!
</details>

<details>
<summary><code>.roll</code></summary>

- Add *[amount: number]* after command.
- Roll a die of custom size. Example: `.roll 20`
</details>
