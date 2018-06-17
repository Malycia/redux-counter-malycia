<<<<<<< HEAD
# Challenge DIY : créons notre propre Redux !

On a posé les bases pendant le cours, avec notre fonction `createStore`
et la fonction `reducer`.

## Création du projet

### Modèle

* Partir du modèle React

* Installer les dépendances avec `yarn`, lancer le serveur avec `yarn start` et vérifier que tout va bien (hello world).

### Create Store

Créer un dossier `store` dans `src` comprenant :
- `createStore.js` : on reprend la fonction du parcours
- `reducer.js` : on reprend la fonction du parcours
- `index.js` : on crée un store, et on l'exporte :

```js
import createStore from './createStore';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

### Subscribe

* Ajouter une méthode `subscribe()` à l'objet renvoyé par `createStore`.
Cette méthode prend en paramètre un callback. Cette fonction devra être stockée,
pour être exécutée chaque fois que le state change.

On pourrait peut-être venir stocker cette fonction dans une variable de notre objet… :thinking:
Au `dispatch`, on exécute cette fonction.

Exemple :

```js
// On est dans un composant React
import store from 'src/store';


store.getState();

store.subscribe(() => {
  console.log('State has been updated');
  const currentState = store.getState();
  // ...
});

// 5 mn après…
store.dispatch({ type: 'SWITCH_ON' });
// En console :
// "State has been updated"
```


* La fonction  `subscribe()` peut accepter des fonctions plusieurs fois.

La variable qui stocke les fonctions pourrait être un array… :thinking:
Un array vide au départ, et on `push` à chaque `func` à chaque `store.subscribe(func)`.
Au `dispatch`, on boucle sur cet array pour exécuter chaque fonction.

```js
import store from 'src/store';

store.subscribe(() => {
  console.log('State has been updated');
});
store.subscribe(() => {
  console.log('Hello World!');
});

store.dispatch({ type: 'SWITCH_ON' });
// En console :
// "State has been updated"
// "hello World!"
```


## Application : Sondage

### Fake datas

Créer l'interface suivante :

```
5 votes

___________    ___________
| oui (3) |    | non (2) |
-----------    -----------
```

Le composant `<App />` doit contenir un composant `<Counter />` et deux composants `<Button />`.
On pourra rajouter une prop au composant Bouton pour déterminer le vote : `<Button name="oui" />`

On peut pour l'instant utiliser des **fausses données**
pour réaliser le découpage en composant et ajouter un peu de style.

### Real datas

#### Récupérer les données

Dans nos composants React, on importe le store (`import store from 'src/store'`),
et on utilise `.subscribe()` pour s'abonner aux changements de state.

Exemple :
```js
class Button extends React.Component {
  componentWillMount() {
    store.subscribe(this.updateState)
  }
}
```

A chaque changement de state, on peut utiliser `this.setState` pour mettre à jour le composant.

```js
class Button extends React.Component {
  componentWillMount() {
    store.subscribe(this.updateState)
  }

  updateState = () => {
    const state = store.getState();
    this.setState({ count: state.oui });
  }
}
```

Une fois qu'on a fait la classe Button, on peut faire pareil pour le Counter :smiley:
Cette fois-ci, on va vouloir le nombre de votes total. C'est-à-dire `state.oui + state.non`.

Pour tester, on pourra venir changer le `initialState` de notre reducer, pour voir si le nombre
de votes est bien récupéré par nos composants.

#### Modifier les données

Quand on clique sur un bouton, on doit déclencher une action avec `dispatch`
pour venir incrémenter le compteur de voix. On peut utiliser une action de la
sorte :

```js
// On définit une action
const action = {
  type: 'VOTE',
  name: 'oui',
};

// On la dispatche
store.dispatch(action);
```

Par exemple, si on veut dispatcher au clic :

```js
class Button extends React.Component {
  handleClick = () => {
    const action = {
      type: 'VOTE',
      name: 'oui',
    };
    store.dispatch(action);
  }

  render() {
    const { count } = this.state;
    return (
      <button className="button" onClick={this.handleClick}>
        oui ({count})
      </button>
    );
  }
}
```

Dans ce code, on pourrait remplacer `oui` par notre prop `name`…
Si tout va bien, au clic, le compteur s'incrémente. Magique ! :dizzy:


### Bonus

* Créer des action creators pour incrémenter les compteurs de voix.
Cf. le test 8 de l'exo d'aujourd'hui.

* Créer un bouton Reset dans le composant `<Counter />`
=======
# redux-counter-malycia
>>>>>>> 0b9439d0f73c9097b46bc4ba780f4359db7a2d9b
