export default {
  menu: {
    home: 'Accueil',
  },
  form: {
    email: {
      label: 'Email',
      rule: {
        required: 'Le champs email est requis',
        type: 'Ce champs doit être de type Email',
      },
    },
    password: {
      label: 'Mot de passe',
      rule: {
        required: 'Le champs mot de passe est requis',
        min: 'Le mot de passe doit être au minimum 6 caractères',
      },
    },
  },
  btn: {
    login: 'Connexion',
  },
}
