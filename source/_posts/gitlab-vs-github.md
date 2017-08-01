---
title: Gitlab vs Github
date: 2017-08-01 15-27-02
---
Pour ceux qui ne connaissent pas GIT est un système de gestion de version décentralisé. Il a été créé par l'inventeur du noyau de Linux : Linus Tolvards. Si vous n'utilisez pas encore GIT et que vous êtes encore sur SVN voir pire CVS je ne peux que vous recommander de basculer au plus vite. Les avantages de GIT sur SVN fera l'objet d'un post à part entière.

Gitlab et Github sont des plateformes qui permettent de gérer le système de version GIT. Ceux ne sont pas juste des serveurs GIT mais un ensemble d'outils gravitant autour de projets informatiques.

J'ai longtemps hésité à utiliser l'une ou l'autre des plateformes, chacun ayant leurs avantages et inconvénients. Après de long mois passés sur Gitlab, je suis passé sur Github et je vous explique pourquoi.

## Gitlab, la solution Open Source
Ce que j'aime chez Gitlab c'est le format Open Source. Si vous voulez être maître de ce qui est fait avec vos données autant privilégier une solution libre. 

La force de Gitlab c'est l'auto hébergement, vous pouvez installer la solution complète sur vos propres serveurs, ce qui en fait une solution idéale pour les grandes entreprises. Pourquoi les "grandes" ? parce qu'une solution cloud hébergée par sa propre entreprise n'est conseillée d'un point de vue financié que pour les "grandes". Les petites entreprises préféreront déléguer la gestion des solutions cloud à des sociétés externes.

Gitlab tout en distribuant leur produit de manière permettant l'auto hébergement, permet aussi d'utiliser leur solution dans le cloud à la manière de Github. C'est cette solution que je conseille aux PME. Elle vous permet de partir sans infrastructure à maintenir, puis de pouvoir basculer rapidement sur de l'auto hébergé.

Gitlab intègre sur la solution hébergée :
- une solution d'intégration continue équivalente à [Travis CI](https://travis-ci.org/) (gratuite même sur des repository privés)
- gestion de merge
- gestion de projet type [Kanban](https://fr.wikipedia.org/wiki/Kanban)
- gestion des issues
- gestion d'hébergement de pages statiques (équivalent [Github Pages](https://pages.github.com/))
- gestion de repositories privés en illimité

Finalement le seul manque de Gitlab en comparaison à Github est le manque de popularité, il n'y a pas de comparaison possible lorsqu'on compare le nombre de projets hébergés sur chacun des deux services. Faites une recherche sur Github vous êtes sûr de trouver le projet que vous cherchez.

L'interface Web est un peu plus brouillone que celle de Github mais elle est aussi plus facilement paramétrable. J'ai ressenti de moins bonnes performances que celle de Github.

## Github, Git pour tous
Github est le plus grand hébergeur de projets open source au monde. C'est la référence quand il s'agit de chercher les dernier framework à la mode et quasiment tous les services associés sont compatible avec lui.

La force de Github c'est sa popularité qui en fait un véritable Hub et presque un réseau social à part entière ! Et ça n'a l'air de rien mais j'aime l'idée de pouvoir avoir des projets référencés et accessibles à la communauté. Github m'a largement aidé à découvrir des projets, des langages de programmation et quoi de plus normal que de mettre à disposition mes projets afin que les autres puissent s'en inspirer.

Prenez ce blog par exemple il est accessible sur Github et vous pouvez le forker, vous pouvez demander une pull request sur n'importe quel article ou page afin de proposer une version améliorée. Imaginez les possbilités si ungrand quotidien permettait cela, vous pourriez faire la correction d'un article et proposer cette version à l'éditeur, tout le monde serait gagnant.

Aujourd'hui il est indispensable d'avoir un compte LinkedIn et votre portefolio en tant que développeur c'est votre compte Github. A la manière qu'un photographe publie ses meilleures photos sur son site, vous vous devez d'avoir un compte Github avec des projets à montrer si vous voulez trouver un job facilement.

Côté fonctionnalités, on trouve la plupart de ce que fait déjà Gitlab sans l'offre d'intégration continue. Vous pouvez utiliser Travis CI mais il vous faudra obligatoirement un repository public.

Github n'offre pas la possibilité gratuitement d'avoir de repositories privés il est donc à conseiller principalement aux projets open source pour lequel il est gratuit.

Il n'est pas possible d'avoir son code hébergé sur ses propres serveurs.

Ce que j'aime beaucoup moi qui suis friand de statistiques c'est de voir l'activité que j'ai sur Github grâce à cette vue :
![github activité](https://s3.eu-central-1.amazonaws.com/mouretpro/github-activity.PNG)
Je trouve personnellement que c'est une motivation pour développer quand on voit une longue période d'inactivité.

## Conclusion
En conclusion, vous pouvez voir que Gitlab fait tout mieux que Github mais ce dernier est extrêmement populaire et c'est difficle de s'en passer.
Finalement on pourrait dire que Github est à Git ce que Google est la recherche.

