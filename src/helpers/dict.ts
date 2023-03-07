import rosetta from "rosetta";

const i18n = rosetta({
  en: {
    home: {
      title: "Epoch Converter",
      epochToHuman: "Epoch to Human",
      humanToEpoch: "Human to Epoch",
      description:
        "The Unix epoch is the number of seconds that have elapsed since January 1st, 1970 at 00:00:00 UTC. This value is used as a reference point for measuring time in Unix systems.",
      readMore: "Read more",
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
    epoch: {
      back: "Back",
      p1: `Unix epoch is a term used to refer to a time measurement system used
      in Unix operating systems and other related systems. The term "epoch"
      refers to a specific moment in time from which time is measured in
      seconds. This moment is January 1, 1970 at 00:00:00 UTC.`,
      p2: `The use of Unix epoch as a time measurement system is due to its simplicity and ease of implementation. Time is measured in seconds from the start of the epoch, which allows for easy calculation of time intervals. Additionally, Unix epoch is a universal time system that can be used worldwide, as it is based on Coordinated Universal Time (UTC).`,
      p3: `Unix epoch is used by many computer systems and applications, including databases, web servers, version control systems, and file systems. It is also used by some programming languages such as C, Java, and Python, among others.`,
      p4: `However, Unix epoch has some limitations. Time measurement is done in seconds, which can be imprecise in some cases, especially when dealing with very small time intervals. Additionally, Unix epoch does not take into account the variation in day length due to factors such as the rotation of the Earth.`,
      p5: `Despite its limitations, Unix epoch remains a widely used and valued time measurement system in the world of computing and programming. Its simplicity and universality make it a valuable tool in many fields and a fundamental part of the history and evolution of operating systems and programming.`,
      python: "Epoch in Python",
      javascript: "Epoch in JavaScript",
      bash: "Epoch in Bash",
      mysql: "Epoch in MySQL",
      postgres: "Epoch in PostgreSQL",
      go: "Epoch in Go",
    },
    about: {
      title: "About",
      back: "Back",
      poweredBy: "Powered by",
      technologies: "Technologies",
      goTo: "Go to",
      tools: "Tools",
    },
  },
  es: {
    home: {
      title: "Conversor Epoch",
      epochToHuman: "Epoch a fecha",
      humanToEpoch: "Fecha a Epoch",
      description:
        "Unix epoch es el número de segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC. Este valor se utiliza como una forma de referencia para medir el tiempo en sistemas Unix.",
      readMore: "Leer más",
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
    epoch: {
      back: "Volver",
      p1: `Unix epoch es un término utilizado para referirse a un sistema de medida de tiempo utilizado en los sistemas operativos Unix y otros sistemas relacionados. El término "epoch" se refiere a un momento específico en el tiempo a partir del cual se mide el tiempo en segundos. Este momento es el 1 de enero de 1970 a las 00:00:00 UTC.`,
      p2: `El uso de Unix epoch como sistema de medición del tiempo se debe a su simplicidad y facilidad de implementación. El tiempo se mide en segundos desde el inicio del epoch, lo que permite un fácil cálculo de intervalos de tiempo. Además, Unix epoch es un sistema de tiempo universal que se puede utilizar en todo el mundo, ya que se basa en el tiempo Coordinado Universal (UTC).`,
      p3: `Unix epoch es utilizado por muchos sistemas y aplicaciones informáticas, incluyendo bases de datos, servidores web, sistemas de control de versiones y sistemas de archivos. También es utilizado por algunos lenguajes de programación como C, Java y Python, entre otros.`,
      p4: `Sin embargo, Unix epoch tiene algunas limitaciones. La medida del tiempo se realiza en segundos, lo que puede ser poco preciso en algunos casos, especialmente cuando se trata de intervalos de tiempo muy pequeños. Además, Unix epoch no tiene en cuenta la variación de la duración del día debido a factores como la rotación de la Tierra.`,
      p5: `A pesar de sus limitaciones, Unix epoch sigue siendo un sistema de medición de tiempo ampliamente utilizado y valorado en el mundo de la informática y la programación. Su simplicidad y universalidad lo hacen una herramienta valiosa en muchos ámbitos y una parte fundamental de la historia y evolución de los sistemas operativos y la programación.`,
      python: "Epoch en Python",
      javascript: "Epoch en JavaScript",
      bash: "Epoch en Bash",
      mysql: "Epoch en MySQL",
      postgres: "Epoch en PostgreSQL",
      go: "Epoch en Go",
    },
    about: {
      title: "Acerca de",
      back: "Volver",
      poweredBy: "Desarrollado por",
      technologies: "Tecnologías",
      goTo: "Ir",
      tools: "Herramientas",
    },
  },
});

export default i18n;
