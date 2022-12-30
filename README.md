# Agostino Photo Studio

Un sito realizzato con [Next.js](https://nextjs.it/posts/framework-react-per-la-produzione-web), MDX ([markdown](https://it.wikipedia.org/wiki/Markdown)) e [Material UI](https://www.intre.it/2020/04/30/applicazioni-react-utilizzando-material-ui/).

Il sito è consultabile qui: <https://agostino-photo.github.io/>

## Manutenzione

Il sito è in hosting gratuito su GitHub pages. Dopo ogni modifica viene ricostruito
e ricaricato sull'host automaticamente in pochi minuti. Il meccanismo che si
occupa di questo si chiama GitHub Actions.

Controlla lo stato delle Actions: <https://github.com/agostino-photo/agostino-photo.github.io/actions>

### Cambiare i link dell'home page

Ogni link ha tre campi: titolo, sottotitolo e href. Quest'ultimo è il link vero e proprio.
I link sono espressi con la semplice [sintassi JSON](https://www.html.it/articoli/introduzione-a-json/) e possono essere modificati in
[`/pages/index.mdx`](https://github.com/agostino-photo/agostino-photo.github.io/blob/main/pages/index.mdx).

Il file può quindi essere modificato premendo l'icona della matita.

![image](https://user-images.githubusercontent.com/1292230/210061205-16999ee2-d973-4b17-b2fc-68af3a8b52d2.png)

Una volta completate le modifiche premere su "Commit changes" in fondo alla pagina.

![image](https://user-images.githubusercontent.com/1292230/210061419-f425d368-4615-4918-a9e5-595f3d1ccee3.png)


### Caricare nuove fotografie

Le fotografie vanno caricate in [`/public/pictures`](https://github.com/agostino-photo/agostino-photo.github.io/tree/main/public/pictures).

Una volta raggiunto il link, le foto possono essere caricate premendo `Add file`>`Upload files`

![image](https://user-images.githubusercontent.com/1292230/210061897-05ce94d8-48a1-4579-b52d-95653a486448.png).

**Nota**: affinché le foto siano mostrate, è necessario aggiungerle a una galleria di foto come spiegato a seguire.

### Aggiungere foto a una galleria

Il processo è simile a quello illustrato precedentemente per modificare i link. Ogni
galleria ha un file `galleria_NOMEFILE.mdx` associato (es. *Natura* sarà in `galleria_natura.mdx`). 

Tali file sono tutti collocati nella cartella [`/pages`](https://github.com/agostino-photo/agostino-photo.github.io/tree/main/pages),
selezionare la galleria desiderata e modificarla come si desidera.
Ogni foto ha tre campi: titolo, descrizione e nome del file. Il nome del file deve corrispondere a quello di una delle foto precedentemente caricate (come mostrato al passo precedente) e includere l'estensione; se assente, verrà presunta come `.jpeg`.

