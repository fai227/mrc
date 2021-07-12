# Mobility Research Center HP

## What's this?

同志社大学 モビリティ研究センターの HP (<https://mrc.doshisha.ac.jp>) です。

もともとは `PHP/HTML` で動いていた（レイアウト崩れ等が多発していた）ものを、CMS を入れて欲しいという要望（from 佐藤先生）があり、 `Next.js(React.js)` ・ `contentful` にマイグレーションしました。

---

## インフラ・サーバ周り（特に更新の必要はないため、ほぼ作業ログ）

AWS Lightsail（EC2）上で Apache が動いています。

Next.js で SSG しているため、サーバレスで公開したいところですが、大学側のドメイン（DNS）が A レコードしか登録申請することができないため、泣く泣くウェブサーバを立てて公開しています。

HTTPS 化については、Let's Encrypt を利用しており、Cron で証明書発行を自動化しています。

### 1. Web サーバ構築まで

> <https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ec2-lamp-amazon-linux-2.html>

Amazon Linux 2 を利用しています。ディストリビューションに応じてコマンドを読み替えてください。

```sh
sudo yum update -y
sudo yum install -y httpd

sudo systemctl start httpd    # Apache の起動
sudo systemctl enable httpd   # インスタンスを再起動しても Apache が起動するように
```

### 2. ルートディレクトリの変更

Next.js では、ビルドしたファイル群は `out` フォルダに出力されます。 GitHub Actions を用いて out ディレクトリをデプロイしているため、ルートディレクトリを out ディレクトリ配下に変更します。

```sh
# /etc/httpd/conf/httpd.conf

- DocumentRoot "/var/www/html"
+ DocumentRoot "/var/www/html/out"
```

Apache を再起動します。

```sh
sudo systemctl restart httpd
```

### 3. TLS (HTTPS) 化

> <https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html>

調査の結果、 AWS の ACM を利用するのは難しいため、 Let's Encrypt を利用して HTTPS 化を行った。

基本は AWS のドキュメント通りにやればできます。

```sh
sudo yum update -y

sudo yum install -y mod_ssl

cd /etc/pki/tls/certs
sudo ./make-dummy-cert localhost.crt
```

```sh
# /etc/httpd/conf.d/ssl.conf

# 下記の行をコメントアウトします
SSLCertificateKeyFile /etc/pki/tls/private/localhost.key
```

```sh
sudo systemctl restart httpd
```

```sh
sudo wget -r --no-parent -A 'epel-release-*.rpm' https://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/

sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm

sudo yum-config-manager --enable epel*

sudo yum repolist all
```

```sh
# /etc/httpd/conf/httpd.conf

# Listen 80 ディレクティブを見つけて、その後ろに下記を追加する
<VirtualHost *:80>
  DocumentRoot "/var/www/html/out"
  ServerName "doshisha.ac.jp"
  ServerAlias "mrc.doshisha.ac.jp"
</VirtualHost>
```

```sh
sudo systemctl restart httpd
```

```sh
sudo yum install -y certbot python2-certbot-apache

sudo certbot

# "Enter email address (used for urgent renewal and security notices)" というプロンプトが表示されたら、連絡先住所を入力し、Enter キーを押します。

# プロンプトが表示されたら Let's Encrypt のサービス利用規約に同意します。

# EFF のメーリングリストに登録するための承認で、「Y」または「N」と入力して Enter キーを押します。

# Certbot に、VirtualHost ブロックで入力した共通名およびサブジェクト代替名 (SAN) が表示されますので、「2」を入力して Enter キーを押します。
```

```sh
# /etc/crontab

# 下記のような行を追加する
39      1,13    *       *       *       root    certbot renew --no-self-upgrade
```

```sh
sudo systemctl restart crond
```

---

## CI/CD

GitHub Actions を用いて Lightsail インスタンスにビルドしたファイル群をデプロイしています。

詳しくは、 `.github/workflows/deploy.yml` を読んでください。

簡単に説明すると、

1. `yarn install --production`
2. `yarn build` で SSG
3. 出力された `out` ディレクトリを圧縮して Lightsail インスタンスに SCP で転送
4. Lightsail 上にある `out` ディレクトリを置き換える

というものです。

トリガーは、 `GitHub の main ブランチに push された時` と、 `Contenful で記事が公開・更新・削除` された時です。

HP の更新が完了すると、 Slack に通知が届くようになっています。

### 注意事項

Lightsail インスタンスが初期状態の場合、 `/var/www/html/` に SCP の権限がない場合がありますので、必要に応じて `chmod` コマンド等で SCP 転送できるようにしてあげてください。

---

## Next.js を編集したい方向け

### Create `.env.local` file

```.env.local
NEXT_PUBLIC_CF_SPACE_ID=""
NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN=""
```

### 注意事項（引き継ぎ事項）

ヘッダーの研究発表のリンクは、「最新年度の研究発表ページに飛ぶ」のではなく、「2018 年度のページに飛ぶ」ように直打ちしています（HP の更新予定がないこともありめんどくさかった）。もし 2018 年度以外のページにリンクさせたい場合は、 `src/components/header.js` を編集してください。

---

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
