### URL Shortener Service

### Proje Hakkında
Bu proje, uzun URL'leri kısaltır ve kullanıcılara kısa URL'ler ile yönlendirme yapmak amacıyla geliştirilen url servisidir.. Proje, NestJS ve Redis kullanıldı.

### Kurulum

### Adım 1: Paket yüklenmesi için
Projenin bağımlılıkların hepsini yüklemek için aşağıdaki komutu çalıştırın:
$ npm install

### Adım 2 Redis Server’ı Başlatın
$redis-server

### Adım 3: Uygulamayı Çalıştırın
$npm run start:dev

Uygulama, varsayılan default olarak http://localhost:3000 adresinde çalışcak.

### Çalışma prensibi
Şimdi isterseniz postman ile nasıl çalışacağını gösterelim
Uzun bir URL’yi kısaltmak için POST isteği gönderebilirsiniz. İstek body’sinde url parametresi bulunmalıdır.

Body kısmına raw seçerek
{
  "url": "https://example.com/very-long-url"
}


Yanıt ise
{
  "shortUrl": "http://localhost:3000/link132"
}

GET /:shortKey - Kısaltılmış URL Yönlendirmesi
Kısaltılmış URL'yi (örneğin, http://localhost:3000/abc123) tarayıcıya girerek, yönlendirme işlemi yapılır ve sonra orijinal URL’ye yönlendirilirsiniz.

Örnek İstek: GET http://localhost:3000/abc123

Yanıt: Kullanıcı orijinal URL’ye yönlendirilir.

Redis Bağlantısı: Uygulama, varsayılan olarak localhost:6379 üzerinden Redis’e bağlanır. Redis sunucusu doğru şekilde başlatılmış olmalıdır.
