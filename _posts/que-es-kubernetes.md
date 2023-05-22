---
title: "¿Qué es Kubernetes?"
excerpt: "Nada es perfecto y Docker no es la excepción, ¿qué pasaría si tenemos decenas de cientos de contenedores Docker corriendo en nuestro ecosistema? Aquí es donde entra Kubernetes."
coverImage: "/kubernetes.png"
date: "2022-10-20T17:30:00.322Z"
tag: DevOps
author:
  name: David Vargas Hernández
  picture: "/me.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Ya conocemos las ventajas y lo que realmente es Docker tanto para nivel desarrollo como para nivel productivo. Docker se ha vuelto hyper popular desde aquel 2013, el año de su lanzamiento, siendo una de las plataformas más utilizadas según la [**Developer Survey 2019 de StackOverflow**](https://www.facebook.com/ProyectoGomma/)

### Qué es Kubernetes

Kubernetes es la plataforma por excelencia para manejar, escalar y realizar deploy de las aplicaciones empaquetadas en contenedores Docker.

Permite realizar la orquestación de diferentes contenedores pudiendo crear copias de uno o varios contenedores haciendo más fácil el escalamiento de nuestra aplicación. Por ejemplo, ¿qué pasaría si en nuestros servidores uno o más contenedores están fallando?, lo que hace Kubernetes es eliminar el contenedor que está fallando y crear nuevas copias de los contenedores funcionales para que nuestros servidores tengan la misma posibilidad de máquina disponible.

### Popularidad de Kubernetes

Google sabía que en Docker podría existir problemas al momento de gestionar cientos de contenedores Docker en producción, es por esto que Kubernetes entró como una solución para llevar aplicaciones a producción para después ser entregado a la Cloud Native Computing Foundation.

Es amado por los desarrolladores al dar la oportunidad de enviar a producción cualquier aplicación con el mismo entorno de desarrollo facilitando enormemente esta tarea. Sin contenedores, resulta complicado tener el mismo entorno en ambas etapas. Kubernetes resuelve esto para que sea más fácil concentrarse únicamente en la construcción del producto.

![Contenedores maritimos](/gestion-contenedores.png)

Tiene servicios como:

- Provee un load balancer de carga interno o externo automático para nuestros servicios.
- Kubernetes permite correr varias réplicas y asegurarse que todas se encuentran funcionando.
- Define diferentes mecanismos para hacer roll-outs de código. Como Canary Deployments.
- Políticas de scaling automáticas. Podemos decirle a kubernetes que si nuestro tráfico o la CPU de nuestro servidor aumenta hasta cierto número cree más réplicas de nuestros pods para satisfacer la demanda.
- Jobs batch. Son esos trabajos que quieres manejar por fuera del ciclo de vida request/response del usuario. Kubernetes nos ayuda a especificarlos muy bien para no hacerlo por fuera de nuestro orquestador. Esto no lo tiene ninguna competencia cercana.

### Conclusión

Docker y Kubernetes son tecnologías súper demandadas tanto en empresas como startups y es un plus muy importante como desarrollador de software.
