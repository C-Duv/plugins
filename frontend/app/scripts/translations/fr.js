'use strict';

angular
   .module('frontendApp')
   .config(function($translateProvider) {
      $translateProvider
         .translations('fr', {
            ON: "sur",
            SLOGAN: "Etendez GLPI avec les plugins",
            TRENDING: "Tendances",
            TRENDING_SUB: "Plugins populaires le mois dernier",
            NEW: "Nouveaux",
            NEW_SUB: "Les plus récents",
            POPULAR: "Populaires",
            POPULAR_SUB: "Les mieux notés",
            UPDATED: "Mis à jour",
            UPDATED_SUB: "Derniers plugins mis à jours",
            TAGS: "Tags",
            TAGS_SUB: "Avec le plus de plugins",
            AUTHORS: "Auteurs",
            AUTHORS_SUB: "Avec le plus grand nombre de contributions",
            NAV_FEATURED: "À la une",
            NAV_ALLPLUGINS: "Tous les plugins",
            NAV_SEARCH: "Rechercher",
            NAV_SUBMIT_A_PLUGIN: "Ajouter votre plugin",
            NAV_CONTACT: "Contactez-nous",
            NAV_DEVELOPER_GUIDES: "Guides Développeur (API)",
            SEARCHBAR_PLACEHOLDER: "Recherche",
            VERSION: "Version",
            COMPATIBLE_WITH: "Compatible avec",
            HOMEPAGE: "Site internet",
            ADDED: "Ajouté",
            BY: "Par",
            CONTRIBUTED_TO: "à contribué à {{plugincount}} plugins",
            PLUGIN_CONTRIBUTED_TO: "à contribué/travaillé sur ces plugins",
            TAGGED_WITH: "taggé sur",
            PLUGIN_TAGGED_WITH: "Plugins taggés avec",
            QUESTION_SUGGESTION_PROBLEM: "Une question, suggestion, ou un problème ?",
            PLEASE_SEND_US_A_MESSAGE: "N'hésitez pas à nous laisser un message",
            PLEASE_USE_SUGGESTION_TRACKER: "Si votre message concerne une demande de nouvelle fonctionalité pour GLPI, vous êtes fortement incité à utiliser notre feature request tracker à cette addresse",
            FIRSTNAME: "Prénom",
            LASTNAME: "Nom",
            EMAIL: "Email",
            SUBJECT: "Sujet",
            YOUR_MESSAGE: "Votre message",
            SUBMIT: "Envoyer",
            SUBMIT_YOUR_PLUGIN: "Ajouter votre plugin!",
            SUB_SUBMIT_YOUR_PLUGIN: "Veuillez fournir une URL vers le fichier xml décrivant votre plugin",
            GLPI_PLUGIN_CREATORS: "Créateurs de plugins GLPI",
            PAGINATION_RESULTS: "Résultats",
            PAGINATION_TO: "à",
            PAGINATION_ON: "sur un total de",
            PAGINATION_ELEMENTS: "elements",
            NO_RESULTS: "Aucun résultat",
            NEVER_UPDATED: "jamais mis à jour depuis la première publication",
            LOADING: "Chargement",
            LOGIN: "Connexion",
            USER_PANEL: "Réglages Profil",
            DISCONNECT: "Déconnexion",
            SIGNIN: "Connexion",
            SIGNUP: "S'enregistrer",
            INVALID_CREDENTIALS: "Mauvais nom d'utilisateur/mot de passe. Si vous n'êtes plus sur cliquez sur 'J'ai oublié mon mot de passe'",
            FIELD_REQUIRED: "* Required",
            EXTERNAL_ACCOUNT_ALREADY_PAIRED: "Ce compte externe a déjà été lié à un autre compte GLPi Plugins.",
            PLUGIN_ALREADY_WATCHED: "Vous surveillez déjà ce plugin",
            YOURE_NOW_WATCHING: "Vous surveillez maintenant",
            PLUGIN_UNWATCHED: "You cessez de surveiller",
            TAGGED: "Taggé",
            DOWNLOADED: "Téléchargé",
            THIS_MONTH: "Depuis un mois",
            THIS_WEEK: "Cette semaine",
            TRANSLATIONS: "Traductions",
            XMLFILE_UNREACHABLE_URL: 'URL innaccessible',
            XMLFILE_PARSE_ERROR: 'Erreur dans le XML (Erreur de parsing)',
            XMLFILE_SPECIFICATION_ERROR: 'Erreur dans le XML (Non respect de la spécification)',
            PANEL_DECLARE_NEW_OAUTH2_APP: 'Declare a new OAuth2 Application',
            PANEL_DECLARE_NEW_OAUTH2_APP: 'Créer une nouvelle application OAuth2',
            PANEL_REGISTER_NEW_APP: 'Créez une nouvelle application OAuth2 pour avoir accès à une API Key',
            PANEL_APPLICATION_NAME: 'Nom de l\'application',
            PANEL_HOMEPAGE_URL: 'URL du site web (optionnel)',
            PANEL_APP_DESCRIPTION: 'Description de l\'application (optionnel, example "API key pour monscript.monlanguage")',
            PANEL_APP_CREATE: 'Créer',
            PANEL_MY_APPLICATIONS: 'Mes applications',
            PANEL_EDIT_APP_SETTINGS: 'Editer les réglages de mon application',
            PANEL_SETTINGS: 'Réglages',
            PANEL_CLIENT_ID: 'Identifiant de l\'application (OAuth2 Client ID)',
            PANEL_CLIENT_SECRET: 'Clé secrete (OAuth2 Client Secret)',
            PANEL_APPLICATION_NAME_TOO_SHORT: 'Le nom de votre application doit être d\'au moins {{n}} caractères',
            PANEL_APPLICATION_NAME_TOO_LONG: 'Le nom de votre application ne doit pas excéder {{n}} characters',
            PANEL_APP_HOMEPAGE_URL: 'URL du site web (optionnel)',
            PANEL_HOMEPAGE_URL_NOT_VALID: 'Cette URL n\'est pas valide',
            PANEL_APP_DESCRIPTION_TOO_LONG: 'La description de votre application ne doit pas excéder {{n}} caractères',
            PANEL_APP_SAVE: 'Sauvegarder',
            PANEL_APP_DELETE: 'Détruire cette clé API',
            AUTHOR_NAME: 'Nom de l`auteur',
            AUTHOR_GLPI_PLUGINS_USERNAME: 'Nom d\'utilisateur GLPi Plugins',
            AUTHOR_CONTRIBUTED_TO: 'A contribué à',
            AUTHOR_PLUGIN_COUNT: '{{plugincount}} Plugins',
            PANEL_CLAIM_AN_AUTHORSHIP: 'Déclarer son nom d\'auteur',
            PANEL_CLAIM_AN_AUTHORSHIP_FEATURE_DESC: 'Vous pouvez référencer votre nom d\'auteur pour être correctement référencé',
            PANEL_CLAIM_AN_AUTHORSHIP_FEATURE_DESC2: 'If we accept the request (ie: make sure that you are the correct author), your user will be associated with all your plugins and you will be granted  with specific admin rights',
            PANEL_CLAIM_AN_AUTHORSHIP_AUTHOR_NAME: 'Author Name (as exactly mentionned in the &lt;author&gt; tag of the concerned plugins XML files)',
            PANEL_CLAIM_AN_AUTHORSHIP_CLAIM: 'Claim',
            PANEL_DELETE_ACCOUNT: 'Supprimer votre compte GLPi Plugins',
            PANEL_DELETE_ACCOUNT_CONFIRM: 'Nous avons besoin que vous confirmiez votre mot de passe pour supprimer votre compte GLPi Plugins',
            PANEL_DELETE_ACCOUNT_PASSWORD: 'Mot de passe',
            PANEL_DELETE_ACCOUNT_DELETE: 'Supprimer compte',
            DOWNLOADED_N_TIMES: 'Téléchargé {{n}} fois',
            ADDED_ON_DATE: 'Ajouter le {{date}}',
            UPDATED_MOMENTS_AGO: 'Mis à jour {{momentsago}}',
            ADDED_MOMENTS_AGO: 'Ajouté {{momentsago}}',
            TAGGED_ON_N_PLUGINS: 'Taggé sur {{plugincount}} plugins',
            CONTRIBUTED_TO_N_PLUGINS: 'A Contributed a {{plugincount}} plugins',
            FINISHACTIVEACCOUNT_CLOSE_TO_THE_GOAL: 'Vous êtes proche de la fin',
            FINISHACTIVATEACCOUNT_WE_NEED_YOU_TO_VALIDATE_SOME_DATA: 'Nous avons besoin que vous validiez certaines données',
            FINISHACTIVEACCOUNT_CONFIRM_USERNAME: 'Changer votre nom d\'utilisateur (ou laisser pour confirmer celui trouvé)',
            FINISHACTIVATEACCOUNT_SELECT_PRIMARY_EMAIL: 'Sélectionnez une addresse email parmis celle validées par vos comptes externes',
            FINISHACTIVEACCOUNT_CONFIRM: 'Confirmer',
            LINKACCOUNT_AN_EXTERNAL_SOCIAL_ACCOUNT: 'Reliez un compte de réseau social externe',
            LINKACCOUNT_LINK_A_NEW_ACCOUNT: 'Relier un nouveau compte',
            LINKACCOUNT_EXTERNAL_ACCOUNTS: 'Vos compte réseaux sociaux externes',
            LINKACCOUNT_SERVICE: 'Service',
            LINKACCOUNT_USERID: 'User #ID',
            LINKACCOUNT_UNLINK: 'Dissocier du compte GLPi Plugins',
            NOTIFICATIONS_PLUGINS_WATCHED: 'Plugins surveillés',
            NOTIFICATIONS_YOURE_NOT_WATCHING_ANY_PLUGINS: 'Vous ne surveillez aucun plugin',
            NOTIFICATIONS_YOULL_RECEIVE_NOTIFICATIONS_ON_UPDATE: 'Vous recevrez une notification sur mise-à-jour',
            NOTIFICATIONS_UNWATCH: 'cesser de surveiller',
            NOTIFICATIONS_DISCOVER_AND_SUBSCRIBE: 'Vous pouvez aussi découvrir de nouveaux plugins et commencez à surveiller des plugins gràce au bouton à côté du bouton télécharger (vous devez être authentifié)',
            NOTIFICATIONS_PLEASE_CHECK_THOSE_TRENDING_PLUGINS: 'Veuillez surveiller ces plugins à la mode',
            PANEL_MY_INFORMATIONS: 'Mes informations',
            PANEL_USERNAME: 'Nom d\'utilisateur',
            PANEL_USERNAME_TOOSHORT: 'Votre nom d\'utilisateur doit être d\'au moins {{n}} caractères',
            PANEL_USERNAME_TOOLONG: 'Votre nom d\'utilisateur ne doit pas excèder {{n}} caractères',
            PANEL_REALNAME: 'Nom réel',
            PANEL_REALNAME_TOOSHORT: 'Votre nom réel doit être d\'au moins {{n}} caractères',
            PANEL_REALNAME_TOOLONG: 'Votre nom réel ne doit pas excèder {{n}} caractères',
            PANEL_EMAIL: 'Email',
            PANEL_FIELD_REQUIRED: 'Champ requis',
            PANEL_INVALID_EMAIL: 'Ceci est une addresse e-mail invalide',
            PANEL_WEBSITE: 'Site Web',
            PANEL_INVALID_WEBSITE: 'Cette URL de site web est invalide',
            PANEL_PASSWORD: 'Mot de passe',
            PANEL_PASSWORD_CONFIRMATION_DIFFERENT: 'Mot de passe et confirmation sont différents',
            PANEL_PASSWORD_TOOSHORT: 'Le mot de passe doit être d\'au moins {{n}} caractères',
            PANEL_PASSSWORD_TOOLONG: 'Le mot de passe ne doit pas excèder {{n}} caractères',
            PANEL_CONFIRM_PASSWORD: 'Confirmer le mot de passe',
            PANEL_UPDATE: 'Mise à jour',
            PANEL_ACTIONS: 'Actions',
            PANEL_MANAGE_EXTERNAL_SOCIAL_ACCOUNTS: 'Gérer mes comptes sociaux externes',
            PANEL_NOTIFICATIONS_SETTINGS: 'Plugins sous surveillance',
            PANEL_MANAGE_API_KEYS: 'Gérer mes clés API (Apps associées)',
            PANEL_PLEASE_DELETE_MY_ACCOUNT: 'Supprimer mon compte',
            PANEL_MY_PLUGINS: 'Mes plugins',
            PANEL_AWAITING_CONFIRMATION: 'En attente d\'acceptation par l\'équipe',
            PANEL_UNREACHABLE_XML_FILE_URL: 'URL du fichier XML innateignable',
            PANEL_INVALID_XML: 'Erreur au niveau du fichier XML',
            PANEL_DELETE_RELATION_TO_PLUGINS: 'Supprimez votre relation à ce plugin',
            PANEL_MANAGE_PERMISSIONS: 'Gérez les permissions',
            PANEL_RELOAD_XML: 'Relire le fichier XML',
            PANEL_PLUGIN_PANEL: 'Réglages du Plugin',
            N_VOTES: '{{n}} votes',
            DOWNLOADS: 'téléchargements',
            DOWNLOAD: 'Téléchargement',
            PLUGIN_UNWATCH: 'Cessez de surveiller',
            PLUGIN_WATCH: 'Surveiller',
            PLUGIN_ISSUES: 'Système de suivi des bugs',
            SORT_BY: 'Ordonnez par',
            RELEVANCE: 'Pertinence',
            POPULARITY: 'Popularité',
            PLUGIN_PANEL: 'Réglages Plugin',
            PLUGIN_PANEL_SUMMARY: 'Infos Principales',
            PLUGIN_PANEL_XML_STATE: 'Etat du XML',
            PLUGIN_PANEL_N_TIMES: '{{n}} fois',
            PLUGIN_PANEL_CONTRIBUTORS: 'Contributeurs (Listés dans le fichier XML)',
            PLUGIN_PANEL_SETTINGS: 'Réglages',
            PLUGIN_PANEL_XML_URL: 'Authoritative Plugin Meta-Description File URL (XML File, see specification)',
            PLUGIN_PANEL_XML_URL: 'URL du fichier métadescriptif de référencement du plugin (fichier XML suivant la spécification)',
            PLUGIN_PANEL_ACTIONS: 'Actions',
            PLUGIN_PANEL_REFRESH_XML_FILE: 'Relire le fichier XML',
            PLUGIN_PANEL_USER_PERMISSIONS: 'Gérer les permissions utilisateur',
            PLUGIN_PANEL_URLNOTREACHABLE: 'L\'URL {{url}} n\'est pas atteignable.',
            PLUGIN_PANEL_FIELD_FAILS_TO_RESPECT_SPEC: 'Le champ {{field}} ne respecte pas la spécification',
            PLUGIN_PANEL_ERROR_AT_LINE_N: 'Erreur ligne {{n}}',
            PLUGIN_PANEL_SEE_PUBLIC_PAGE: 'Voir la page publique',
            PLUGIN_PANEL_SAVE: 'Sauvegarder',
            PLUGIN_PERMISSIONS_OF_PLUGIN: 'Réglez les permissions des utilisateurs GLPi Plugins Users sur "{{pluginkey}}" Plugin',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS: 'Permissions utilisateur',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_1: 'Pour chaque permission donnée (représentée par une ligne mentionnant un utilisateur) vous avez des checkboxes représentant un droit spécifique donné sur ce plugin,',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_2: 'Cochez ou décochez les checkboxes pour instantanément ajouter/enlever un droit spécifique donné sur ce plugin,',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_3: 'Fermez ce dialogue lorsque vous avez fini vos réglages',
            PLUGIN_PERMISSIONS_USER_PERMISSIONS_DETAILS_4: 'Utiliser le bouton rouge avec une croix pour supprimer la permission de l\'utilisateur mentionné par la ligne, avec tous ses droits sur le plugin',
            PLUGIN_PERMISSIONS_ADMIN: 'Admin',
            PLUGIN_PERMISSIONS_ALLOWED_EVERYTHING: 'Tous les droits (Recoit notifications, Peut changer URL, Peut rafraichir)',
            PLUGIN_PERMISSIONS_REFRESH_XML: 'Autorisé à lancer la relecture du fichier XML',
            PLUGIN_PERMISSIONS_RECEIVE_NOTIFICATIONS: 'Reçoit des notifications sur l\'état de validation des métadonnées XML',
            PLUGIN_PERMISSIONS_ALLOWED_CHANGE_XML_URL: 'Autorisé à changer l\'URL du fichier XML',
            PLUGIN_PERMISSIONS_DELETE_USER_RIGHT: 'Détruire ce droit utilisateur',
            PLUGIN_PERMISSIONS_ADD_USER_PERMISSIONS: 'Ajouter des permissions utilisateur',
            PLUGIN_PERMISSIONS_AUTOCOMPLETE_PLACEHOLDER: 'Please type the username, realname or email of a registered user, then use arrow and enter to select the user',
            PLUGIN_PERMISSIONS_AUTOCOMPLETE_PLACEHOLDER: 'Veuillez taper le nom d\'utilisateur, le nom réel, ou l\'email d\'un utilisateur enregistré, utilisez ensuite les flèches et entrée pour sélectionner un utilisateur.',
            PLUGIN_PERMISSIONS_AUTOCOMPLETE_NO_MATCHING_USERS: 'Aucun utilisateur correspondant',
            SIGNIN_PAGE_TITLE: 'Connexion avec votre compte GLPI Plugins',
            SIGNIN_USERNAME_OR_EMAIL: 'Nom d\'utilisateur ou email',
            SIGNIN_PASSWORD: 'Mot de passe',
            SIGNIN_LOGIN: 'Connexion',
            SIGNIN_OR_CONNECT_WITH_AN_EXTERNAL_ACCOUNT: 'Ou connectez-vous avec un compte de réseau social externe',
            SIGNUP_REGISTER_MANUALLY: 'Vous enregistrer manuellement',
            SIGNUP_USERNAME: 'Nom d\'utilisateur',
            SIGNUP_USERNAME_TOOSHORT: 'Votre nom d\'utilisateur doit contenir au moins {{n}} caractères',
            SIGNUP_USERNAME_TOOLONG: 'Votre nom d\'utilisateur ne doit pas excèder {{n}} caractères',
            SIGNUP_USERNAME_BADCHARACTERS: 'Votre nom d\'utilisateur ne doit contenir que des caractères alphanumériques',
            SIGNUP_REALNAME: 'Nom complet',
            SIGNUP_REALNAME_TOOSHORT: 'Your nom complet doit contenir au moins {{n}} caractères',
            SIGNUP_REALNAME_TOOLONG: 'Votre nom complet ne doit pas excèder {{n}} caractères',
            SIGNUP_EMAIL: 'Email',
            SIGNUP_EMAIL_INVALID: 'Cet email est invalide',
            SIGNUP_WEBSITE: 'Site internet',
            SIGNUP_WEBSITE_INVALID: 'Cette URL de site web est invalide',
            SIGNUP_PASSWORD: 'Mot de passe',
            SIGNUP_PASSWORD_DIFFERENT: 'Mots de passe et confirmation diffèrent',
            SIGNUP_PASSWORD_TOOSHORT: 'Votre mot de passe doit contenir au moins {{n}} caractères',
            SIGNUP_PASSWORD_TOOLONG: 'Votre mot de passe ne doit pas dépasser {{n}} caractères',
            SIGNUP_PASSWORD_CONFIRM: 'Confirmez votre mot-de-passe',
            SIGNUP_OR_LINK_YOUR_ACCOUNT: 'Ou lier un compte de réseau social externe',
            SUBMIT_PLUGIN_URL: 'URL',
            SUBMIT_YOU_MUST_BE_AUTHED: 'Vous devez être identifié',
            SUBMIT_YOU_MUST_BE_AUTHED_2: 'Vous devez être identifié pour soumettre un plugin',
            SUBMIT_PLEASE: 'Veuillez',
            SUBMIT_SIGNIN: 'Vous Identifier',
            SUBMIT_IF_YOU_DONT_HAVE_AN_ACCOUNT: 'Si vous ne possédez pas déjà de compte GLPi Plugins, veuillez considérer',
            SUBMIT_REGISTER: 'vous Enregistrer',
            SUBMIT_YOUR_XML_MUST_BE_VALID: 'Votre champ XML doit être valide',
            SUBMIT_AND_RESPECT_THIS_FORMAT: 'et respecté ce format',
            SUBMIT_XML_DISPLAYED_NAME: 'Nom affiché',
            SUBMIT_XML_KEY: 'Nom système',
            SUBMIT_XML_SHORT_DESCRIPTION: 'courte description du plugin, affiché dans les listes de plugins, uniquement texte',
            SUBMIT_XML_LONG_DESCRIPTION: 'description longue du plugin, affiché dans les pages plugins, Markdown accepté',
            SUBMIT_XML_YOUR_NAME: 'Votre nom',
            TAGS_TAGGED_ON_N_PLUGINS: 'Taggés avec {{n}} plugins',
            VIEWAPIKEY_PAGE_TITLE: 'Voir les détails de la clé (Client Credentials OAuth2)',
            VIEWAPIKEY_CLIENT_CREDENTIALS: 'Client Credentials',
            VIEWAPIKEY_CLIENT_ID: 'Client ID',
            VIEWAPIKEY_CLIENT_SECRET: 'Client Secret',
            INVALID_XML_BECAUSE_UNREACHABLE_URL: 'Votre fichier XML n\'est pas atteignable à l\'URL mentionnée'
         });
   });
