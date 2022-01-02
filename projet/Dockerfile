FROM maven:3.6.1-jdk-11-slim AS build
RUN mkdir -p /ws
WORKDIR /ws
COPY pom.xml /ws
COPY src /ws/src
RUN mvn -f pom.xml -Dmaven.test.skip  clean package

FROM openjdk:11
COPY --from=build /ws/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]