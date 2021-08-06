export default {
  menu: {
    home: 'Accueil',
    logout: 'Se déconnecter',
    childs: 'Enfants',
  },
  title: {
    login: 'Se connecter',
    register: 'S\'inscrire',
    childs: 'Enfants',
  },
  link: {
    login: 'Vous avez déjà un compte? Connectez-vous',
    register: 'Vous n\'avez pas encore un compte? Inscrivez-vous',
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
    passwordConfirm: {
      label: 'Confirmation du mot de passe',
      rule: {
        identique: 'Ce champs doit être identique au mot de passe',
      },
    },
  },
  btn: {
    login: 'Connexion',
    register: 'Inscription',
  },
  alert: {
    firebase: {
      'auth/user-not-found': 'There is no user record corresponding to this identifier. The user may have been deleted.',
    },
    form: {
      validation: 'La validation du formulaire a échoué',
    },
    register: {
      success: 'Votre compte a été créé. Veuillez vérifier votre boite email pour activer votre compte.',
    },
    login: {
      success: 'Vous vous êtes authentifié',
      emailNotVerified: 'Votre compte n\'est pas activé. Veuillez vérifier votre boite email',
    },
    error: {
      unknown: 'Une erreur inconnue est survenu',
    },
  },
  firstName: 'Prénom',
  lastName: 'Nom',
  sexe: 'Sexe',
  birthDate: 'Date de naissance',
  observation: 'Observation',
  boy: 'Garçon',
  girl: 'Fille',
  yes: 'Oui',
  no: 'Non',
}
