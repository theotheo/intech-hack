# Микросервисной архитектура для создания тестировочных данных




# Как использовать?

Для начала необходимо установить docker и docker-compose.

Далее вся инфраструктура запускается следующим образом:
```
$ bash gen
$ docker-compose -f docker-compose.yml -f docker-compose-gen.yml build
$ docker-compose -f docker-compose.yml -f docker-compose-gen.yml up -d
```

Посмотреть на запущенные сервисы можно через UI, предоставляемое Consul: ```http://localhost:8500/ui```

Сервисы доступны на локальном адрес по роутам, совпадающими с именами соответствующих файлов. Например,
```
$ curl -L localhost/inn
$ curl -L localhost/region
```
И т.д., смотри папку ```fakers```

Все сервисы можно оценить единовременно с помощью удобного скрипта:
```
$ bash test --repeat=5
$ less result.txt
```


# Как все работает?

[Registrator](https://github.com/gliderlabs/registrator) отвечает за регистрацию и дерегистрацию сервисов, основываясь на событиях о запуске и остановке от докера.

[Consul](https://github.com/progrium/docker-consul) хранит регистр сервисов.

[nginx](http://nginx.org/en/docs/http/load_balancing.html) проксирует запросы к сервисам.

[Consul-template](https://github.com/hashicorp/consul-template) генерирует валидный nginx файл конфигурации в ```/etc/nginx/conf.d``` директории, основываясь на [template](templates/app.conf) и перезагружает nginx когда новый сервис регистрируется в Consul/
