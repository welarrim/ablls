export default {
  menu: {
    home: 'Accueil',
    logout: 'Se déconnecter',
    childs: 'Enfants',
    skills: 'Compétences',
    tasks: 'Tâches',
    evaluations: 'Evaluations',
  },
  title: {
    login: 'Se connecter',
    register: 'S\'inscrire',
    childs: 'Enfants',
    skills: 'Compétences',
    tasks: 'Tâches',
    evaluations: 'Evaluations',
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
    order: {
      label: 'Ordre',
      rule: {
        required: 'Le champs ordre est requis',
      },
    },
    score: {
      label: 'Score',
      rule: {
        required: 'Le champs score est requis',
      },
    },
    goal: {
      label: 'Objectif',
      rule: {
        required: 'Le champs objectif est requis',
      },
    },
    question: {
      label: 'Question',
      rule: {
        required: 'Le champs question est requis',
      },
    },
    examples: {
      label: 'Exemples',
      rule: {
        required: 'Le champs exemples est requis',
      },
    },
    criterias: {
      label: 'Critères',
      rule: {
        required: 'Le champs critères est requis',
      },
    },
    observations: {
      label: 'Observations',
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
    skill: {
      label: 'Compétence',
      rule: {
        required: 'Le champs compétence est requis',
      },
    },
    child: {
      label: 'Enfant',
      rule: {
        required: 'Le champs enfant est requis',
      },
    },
    date: {
      label: 'Date',
      placeholder: 'Choisissez la date de l\'évaluation',
      rule: {
        required: 'Le champs date est requis',
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
    tasks: {
      delete: {
        success: 'La tâche a été supprimée avec succès',
      },
    },
    evaluations: {
      delete: {
        success: 'L\'évaluation a été supprimée avec succès',
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
    task: {
      add: {
        title: 'Ajouter une tâche',
      },
      edit: {
        title: 'Modifier les informations d\'une tâche',
      },
    },
    evaluation: {
      add: {
        title: 'Ajouter une évaluation',
      },
      edit: {
        title: 'Modifier les informations d\'une évaluation',
      },
    },
  },
  firstname: 'Prénom',
  lastname: 'Nom',
  letter: 'Lettre',
  name: 'Nom',
  gender: 'Genre',
  birthdate: 'Date de naissance',
  observations: 'Observations',
  boy: 'Garçon',
  girl: 'Fille',
  yes: 'Oui',
  no: 'Non',
  order: 'Ordre',
  score: 'Score',
  skill: 'Compétence',
  date: 'Date',
  status: 'Etat',
  child: 'Enfant',
  pending: 'En cours',
  done: 'Terminé',
  next: 'Suivant',
  task: {
    goal: 'Objectif de la tâche',
    question: 'Question',
    examples: 'Exemples',
    criterias: 'Critères',
    observations: 'Observations',
  },
}
