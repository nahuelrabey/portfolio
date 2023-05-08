---
slug: programar-sistemas-bimonetarios
title: Cómo programar software para mercados bimonetarios
image: /images/moneys.jpg
date: 20-04-2023
og_image: 'https://i.ibb.co/0G2p1t2/Facebook-post-5.png'
# desc: >-
#   ¿Quieres ahorrar dinero y tiempo en tu proyecto web? te cuento porqué
#   contratar a un desarrollador profesional te garantizará calidad y eficiencia.
---
# Cómo programar software para mercados bimonetarios

Para países cómo Argentina, dónde comerciamos en una moneda Nacional al interior
del país, pero exportamos en dólares, tener sistemas de control de stock capaces
de funcionar en ambas monedas es fundamental. Incluso, si nuestros insumos
dependen exclusivamente de productos dolarizados, tener una forma automática de
asignar precios en la moneda local.

El artículo se basará en las condiciones particulares de Argentina, dónde hay
varias cotizaciones para el Dólar, aunque las técnicas que repasaré en este
artículo son aplicables a todos los países, sobre todo ahora que el comercio en
Yuanes se suma al ya común comercio en Dólares y Euros.

## ¿Qué precios usar?

Un sistema de inventario bi-monetario debe ser capaz de intercambiar entre las
distintas cotizaciones del dólar, para poder ser adaptado a cada industria.

Una gran herramienta es la página [dolarito.ar](https://www.dolarito.ar/), desde la cual el sistema
que preparemos puede encontrar los valores casi en tiempo real de todas las
cotizaciones (Oficial, Blue, MEP, CCL, etc). Tengamos en cuenta que es un
proyecto que se financia con el apoyo económico de sus usuarios, por lo tanto
invitamos a todos los desarrolladores a contactarse con ellos y financiarlos en
caso de usar sus datos, y a siempre chequear las políticas de uso, que están
sujetos a cambios eventuales.

Sin importar cual sea nuestra fuente, debemos darnos una estrategia para brindar
los datos a nuestra app. Podemos utilizar Redis para tener un caché con las
últimas cotizaciones y para lanzar un evento cada vez que el precio cambie (con
streams); ésto último puede lograrse también con Apache Kafka o Amazon SQS,
entre otros.

## Estrategias para calcular los precios

En muchos casos, sobre todo en tiendas o PYMES, tener tal cual el precio de un
producto en dólares es muy poco práctico. Supongamos que un bien nos costó
producirlo 12USD, hoy en día (07/05/23) costaría 5,628ARS. Nadie en una tienda
(excepto usando tarjetas de crédito o débito) puede tener exactamente ese dinero
en mano, terminaríamos eventualmente quedándonos sin cambio. Otro problema es
que los precios cambiarían muy seguido, incluso a lo largo de un mismo día,
aunque sea por centésimas.

Hay dos funciones matemáticas que nos permiten trabajar alrededor de esto: floor
y ceil (redondear hacia abajo y redondear hacia arriba). Típicamente cortan los
decimales, pero también podemos usarlas para redondear decenas, centenas, etc.

Veamos por ejemplo la siguiente tabla:

|            |   USD |    ARS |   CEILED |   FLOORED |
|:-----------|------:|-------:|---------:|----------:|
| producto_1 |   5.5 | 2579.5 |     2600 |      2500 |
| producto_2 |   4.8 | 2251.2 |     2300 |      2200 |
| producto_3 |   2.1 |  984.9 |     1000 |       900 |
| producto_4 |   1.9 |  891.1 |      900 |       800 |
| producto_5 |   4.8 | 2251.2 |     2300 |      2200 |

En la columna USD están los precios en dólares, en ARS en pesos y en CEILED y
FLOORED redondeados hacia arriba y hacia abajo; respectivamente.

![gráfico de barras](/images/programar-sistemas-bimonetarios.png)

Vemos que cuando usamos *ceil*, siempre obtenemos un valor más alto que el precio
en pesos; cuando usamos *floor*, más bajo. El uso de uno u otro dependerá de
nosotros. 

Notemos que los precios dan saltos de a centenas, esto hace que los precios sean
más o menos estables, pero también que den saltos mucho más bruscos, sobre todo
cuando cursando una corrida cambiaria.

## Estrategias para procesar los datos. 

Se debe elegir una moneda base para calcular los precios, ya sea esta moneda ARS
o USD. A partir de esta moneda base, en cada proceso, se puede calcular el valor
en el resto de monedas que hagamos transacciones.

También se podría tener una rutina, que ocurra en una determinada hora del día
(por ejemplo, el cierre de los mercados) o al finalizar la semana, para calcular
los precios siguientes.

Cualquiera de estas rutinas, podrían estar programadas en Python y alojadas en
una función serverless, cómo AWS Lambda.

## Conclusión.

Un sistema de inventario bimonetario necesita muchas partes para funcionar, ni hablar si deseamos que funcione con múltiples divisas. Por ello, un acercamiento moderno al problema es utilizar servicios de nube cómo AWS, Google, o Azure, si querés conocer un poco más de ellas te recomiendo éste artículo


