$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("USSD_2.feature");
formatter.feature({
  "line": 1,
  "name": "Flujos de USSD Versión 2",
  "description": "",
  "id": "flujos-de-ussd-versión-2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Recibir SMS para descargar APP",
  "description": "",
  "id": "flujos-de-ussd-versión-2;recibir-sms-para-descargar-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@USSD_Testing_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Se ingresa a USSD mediante *183# Testing",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "se ingresa a la opcion Consultar mi prepago",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "se ingresa la opcion Recibir SMS para descargar APP",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "se verifica el envio de SMS",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "flujos-de-ussd-versión-2;recibir-sms-para-descargar-app;",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 12,
      "id": "flujos-de-ussd-versión-2;recibir-sms-para-descargar-app;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 13,
      "id": "flujos-de-ussd-versión-2;recibir-sms-para-descargar-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 172904600,
  "status": "passed"
});
formatter.before({
  "duration": 38119886800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Recibir SMS para descargar APP",
  "description": "",
  "id": "flujos-de-ussd-versión-2;recibir-sms-para-descargar-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@USSD_Testing_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Se ingresa a USSD mediante *183# Testing",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "se ingresa a la opcion Consultar mi prepago",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "se ingresa la opcion Recibir SMS para descargar APP",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "se verifica el envio de SMS",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "183",
      "offset": 28
    }
  ],
  "location": "steps_USSD.seIngresaAUSSDMedianteTesting(int)"
});
formatter.result({
  "duration": 9084366600,
  "status": "passed"
});
formatter.match({
  "location": "steps_USSD.seIngresaALaOpcionConsultarMiPrepago()"
});
formatter.result({
  "duration": 5834005100,
  "status": "passed"
});
formatter.match({
  "location": "steps_USSD.seIngresaLaOpcionRecibirSMSParaDescargarAPP()"
});
formatter.result({
  "duration": 5431404300,
  "status": "passed"
});
formatter.match({
  "location": "steps_USSD.seVerificaElEnvioDeSMS()"
});
formatter.result({
  "duration": 6218854100,
  "status": "passed"
});
formatter.after({
  "duration": 1279658000,
  "status": "passed"
});
});