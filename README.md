# Agostino Photo Studio

Un sito realizzato con Next.js, MDX e Material UI.

Il sito è consultabile qui: <https://agostino-photo.github.io/>

## Manutenzione

Il sito è in hosting gratuito su GitHub pages. Dopo ogni modifica viene ricostruito
e ricaricato sull'host automaticamente in pochi minuti. Il meccanismo che si
occupa di questo si chiama GitHub Actions.

Controlla lo stato delle Actions: <https://github.com/agostino-photo/agostino-photo.github.io/actions>

### Cambiare link dell'home page

Ogni link ha tre campi: titolo, sottotitolo e href. Quest'ultimo è il link vero e proprio.
I link sono espressi con la semplice sintassi JSON e possono essere modificati in
[`/pages/index.mdx`](https://github.com/agostino-photo/agostino-photo.github.io/blob/main/pages/index.mdx).
