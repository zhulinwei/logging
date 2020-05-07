# build stage
FROM golang:latest as builder
LABEL stage=gobuilder
WORKDIR /build
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o example

# final stage
FROM scratch
COPY --from=builder /build/example /
EXPOSE 8080
ENTRYPOINT ["/example"]