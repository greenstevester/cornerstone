import { html } from "lit-element";
import { Router } from "../../cornerstone/shared/Router";

export function menu(router: Router) {
  return html`
       <div class="container">
            <div class="row">
                <button class="column" @click=${() => router.goto('')}>Home</button>
                <button class="column" @click=${() => router.goto('stack')}>The Stack</button>
                <button class="column" @click=${() => router.goto('story')}>The Story</button>
                <button class="column" @click=${() => router.goto('about')}>About</button>
            </div>
       </div>
`;
}
