FROM openjdk:11
COPY target/projet-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "-Djava.net.preferIPv4Stack=true","app.jar"]