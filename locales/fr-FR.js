export default {
  menu: {
    home: 'Accueil',
    logout: 'Se déconnecter',
    childs: 'Enfants',
    skills: 'Compétences',
  },
  title: {
    login: 'Se connecter',
    register: 'S\'inscrire',
    childs: 'Enfants',
    skills: 'Compétences',
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
    firstname: {
      label: 'Prénom',
      rule: {
        required: 'Le champs prénom est requis',
      },
    },
    lastname: {
      label: 'Nom',
      rule: {
        required: 'Le champs nom est requis',
      },
    },
    gender: {
      label: 'Genre',
      rule: {
        required: 'Le champs genre est requis',
      },
    },
    birthdate: {
      label: 'Date de naissance',
      placeholder: 'Choisissez la date de naissance',
      rule: {
        required: 'Le champs date de naissance est requis',
      },
    },
    observation: {
      label: 'Observation',
    },
    options: {
      boy: 'Garçon',
      girl: 'Fille',
    },
    letter: {
      label: 'Lettre',
      rule: {
        required: 'Le champs lettre est requis',
      },
    },
    name: {
      label: 'Nom',
      rule: {
        required: 'Le champs nom est requis',
      },
    },
  },
  btn: {
    login: 'Connexion',
    register: 'Inscription',
    edit: 'Editer',
    remove: 'Supprimer',
    add: 'Ajouter',
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
    childs: {
      delete: {
        success: 'L\'enfant a été supprimé avec succès',
      },
    },
    skills: {
      delete: {
        success: 'La compétence a été supprimée avec succès',
      },
    },
  },
  modal: {
    child: {
      add: {
        title: 'Ajouter un enfant',
      },
      edit: {
        title: 'Modifier les informations d\'un enfant',
      },
    },
    skill: {
      add: {
        title: 'Ajouter une compétence',
      },
      edit: {
        title: 'Modifier les informations d\'une compétence',
      },
    },
  },
  firstname: 'Prénom',
  lastname: 'Nom',
  letter: 'Lettre',
  name: 'Nom',
  gender: 'Genre',
  birthdate: 'Date de naissance',
  observation: 'Observation',
  boy: 'Garçon',
  girl: 'Fille',
  yes: 'Oui',
  no: 'Non',
}
