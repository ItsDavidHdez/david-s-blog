---
title: "¿Qué es Docker y contenedores?"
excerpt: "Docker se ha vuelto muy popular desde su lanzamiento, siendo una de las plataformas más usadas después de Linux y Windows según los resultados del Developer Survey 2019 de StackOverflow"
coverImage: "/docker.jpeg"
date: "2022-10-20T16:05:00.322Z"
tag: DevOps
author:
  name: David Vargas Hernández
  picture: "/me.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Docker es una plataforma abierta para que los desarrolladores como tú y como yo, administren, envíen y reciban sus aplicaciones por medio de máquinas físicas, virtuales, centros de datos o en la nube.

"Es que en mi computadora si funciona, no sé porque a ti no", "Es que mi computadora tiene instalado esto y la tuya no", "Es que mi PC es Linux y la tuya Windows", Docker elimina por completo ese "es que" logrando empaquetar tu software donde en ese mismo paquete incluye todo lo necesario para que tu app funcione: librerías, plug-ins, tecnologías de bases de datos, versión de tu lenguaje de programación, etc. Piénsalo mejor como si compraras un nuevo celular, viene empaquetado con el respectivo equipo, cargador, un instructivo para su uso y en la mayoría de las veces el celular viene listo para su uso.

![Contenedores maritimos](/unboxing.jpg)

Con Docker se puede ajustar la escalabilidad de aplicaciones de una forma rápida en cualquier entorno Linux, Windows o Mac con la garantía de que el código se ejecutará.

Yo sé lo que estás pensando, tal vez piensas que a nivel teórico Docker es como una máquina virtual "ligera", pero no lo es. Docker no tiene la capacidad de virtualizar hardware sobre el cual corra un sistema operativo completo. Docker lo que utiliza son algunas características del Kernel del SO para encapsular un sistema, así tu software ni se enterará de que está encapsulado dentro de un contenedor. Piénsalo como los contenedores de las embarcaciones que cargar por ejemplo, automóviles último modelo de Europa a América, los automóviles son nuestros proyectos, donde el remitente es nuestra computadora local y el destinatario es la computadora de nuestro compañero.

![Contenedores maritimos](/contenedor.webp)

_Los contenedores se encuentran aislados unos con otros y se comportan como máquinas totalmente independientes._

Gracias al uso de los contenedores los recursos baja a gran medida a comparación de una VM limitándose solo al consumo del software que lo contenga.

### Pero y, ¿los contenedores?

Ya mencionamos de forma introductoria los contenedores, pero ahora definamos completamente este concepto. Docker necesita de los "contenedores de Linux" que no son más que un cóctel de tecnologías que juntas forman un contenedor (de Docker) las cuales son:

- Namespaces: Le permite al proyecto dentro del contenedor de Docker visualizar los recursos del SO.
- Cgroups: Permite medir los recursos disponibles del SO.
- Chroot: Crea su propio entorno de ejecución con su propio _root_ y _home_, es decir, como un SO "falso".

### Okay okay, ya sé que son los contenedores, pero, ¿cuáles son las ventajas de estas?

- Son más livianos (porque trabajan a nivel del Kernel) que las VM's.
- No se requiere de un SO por contenedor.
- Menor uso de recursos.
- Mayor cantidad de contenedores por máquina física.
- Portabilidad más eficiente.

![Docker vs máquina virtual](/docker-vs-vm.webp)

### Conclusión

Aprender Docker te dará un plus a tus skills como desarrollador, y si cursas la ingeniería informática o de sistemas demuéstrale a tu profesor que la virtualización no es la única forma de tener otro SO dentro de tu máquina física, aunque aclarando que el concepto de contenedor se popularizó hace unos 8 años aproximadamente gracias a Docker, el concepto existe desde los años de Google en una cochera.
