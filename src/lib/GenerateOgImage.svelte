<script lang="ts">
  import { toPng } from 'html-to-image';
	import { getTemplateOgImage } from '$lib/utils';
	import { browser } from '$app/environment';

  export let title: string
  export let path: string

  let template: HTMLElement
  
  $: if(browser) {
    const htmlStr = getTemplateOgImage(title, path)
    const parser = new window.DOMParser()
    const doc = parser.parseFromString(htmlStr, "text/html")
    template = doc.body.querySelector('div') as HTMLElement
  }
</script>

{#if template}
  {#await toPng(template, {width: 500, height: 300, skipFonts: true, preferredFontFormat: 'woff2'}) then dataUrl}
    <meta property="og:image" content={dataUrl} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="300" />
    <meta property="og:image:alt" content="A imagem contém uma logo do jogo, a identidade visual e o título da página e uma URL indicando o seu endereço web." />
  {/await}
{/if}