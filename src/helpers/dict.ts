import rosetta from "rosetta";

const i18n = rosetta({
  en: {
    home: {
      title: "Epoch Converter",
      epochToHuman: "Epoch to Human",
      humanToEpoch: "Human to Epoch",
      description:
        "The Unix epoch is the number of seconds that have elapsed since January 1st, 1970 at 00:00:00 UTC. This value is used as a reference point for measuring time in Unix systems.",
    },
    epochToHuman: {
      gmt: "GMT",
      local: "Local",
      placeholder: "Enter epoch time",
      convert: "Convert",
      buttonLabel: "Convert epoch to human date",
      milliseconds: "milliseconds",
    },
    colorSchemeControl: {
      toggle: "Toggle color scheme",
    },
    currentDateTime: {
      label: "Current date and time:",
    },
    currentEpoch: {
      label: "Current Unix epoch time:",
      clipboard: "Copy to clipboard",
      copy: "Copy",
      copied: "Copied",
    },
    humanToEpoch: {
      year: {
        label: "Year",
        placeholder: "Enter year",
      },
      month: {
        label: "Month",
        placeholder: "Enter month",
      },
      day: {
        label: "Day",
        placeholder: "Enter day",
      },
      hour: {
        label: "Hour",
        placeholder: "Enter hour",
      },
      minute: {
        label: "Minute",
        placeholder: "Enter minute",
      },
      second: {
        label: "Second",
        placeholder: "Enter second",
      },
      button: {
        label: "Convert human date to epoch",
        text: "Convert",
      },
    },
    localeControl: {
      title: "Chnage language",
    },
  },
  es: {
    home: {
      title: "Conversor Epoch",
      epochToHuman: "Epoch a fecha",
      humanToEpoch: "Fecha a Epoch",
      description:
        "Unix epoch es el número de segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC. Este valor se utiliza como una forma de referencia para medir el tiempo en sistemas Unix.",
    },
    epochToHuman: {
      gmt: "GMT",
      local: "Local",
      placeholder: "Introduzca el tiempo epoch",
      convert: "Convertir",
      buttonLabel: "Convertir epoch a fecha humana",
      milliseconds: "milisegundos",
    },
    colorSchemeControl: {
      toggle: "Cambiar color de la interfaz",
    },
    currentDateTime: {
      label: "Fecha y hora actual:",
    },
    currentEpoch: {
      label: "Tiempo Unix actual:",
      clipboard: "Copiar al portapapeles",
      copy: "Copiar",
      copied: "Copiado",
    },
    humanToEpoch: {
      year: {
        label: "Año",
        placeholder: "Introduzca el año",
      },
      month: {
        label: "Mes",
        placeholder: "Introduzca el mes",
      },
      day: {
        label: "Día",
        placeholder: "Introduzca el día",
      },
      hour: {
        label: "Hora",
        placeholder: "Introduzca la hora",
      },
      minute: {
        label: "Minuto",
        placeholder: "Introduzca el minuto",
      },
      second: {
        label: "Segundo",
        placeholder: "Introduzca el segundo",
      },
      button: {
        label: "Convertir fecha a epoch",
        text: "Convertir",
      },
    },
    localeControl: {
      title: "Cambiar idioma",
    },
  },
});

export default i18n;
