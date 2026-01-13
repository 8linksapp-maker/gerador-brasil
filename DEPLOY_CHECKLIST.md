# ═══════════════════════════════════════════════════════════════
# CHECKLIST DE DEPLOY - Geradores Brasil
# Plataforma: Vercel
# ═══════════════════════════════════════════════════════════════

## 📋 PRÉ-REQUISITOS

- [ ] Código commitado no GitHub/GitLab/Bitbucket
- [ ] Projeto buildando localmente (`npm run build`)
- [ ] Arquivo `.env.example` configurado
- [ ] Arquivo `.npmrc` criado na raiz (ver abaixo)
- [ ] Projeto Supabase criado e configurado

## ⚠️ IMPORTANTE: RESOLVER CONFLITO DE DEPENDÊNCIAS

Se você receber o erro `ERESOLVE unable to resolve dependency tree`, o arquivo `.npmrc` criado na raiz do projeto já resolve isso:

```
legacy-peer-deps=true
```

Isso resolve conflitos entre versões do React e bibliotecas como lucide-react.

## 🚀 PASSO 1: CRIAR PROJETO

1. Acesse: https://vercel.com/new/import
2. Conecte seu repositório Git
3. Selecione o repositório do projeto
4. Configure as opções de build:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

## ⚙️ PASSO 2: VARIÁVEIS DE AMBIENTE

Configure as seguintes variáveis no painel do Vercel:

```
VITE_SUPABASE_URL = [URL do seu projeto Supabase]
VITE_SUPABASE_ANON_KEY = [Anon Key do Supabase]
VITE_SITE_URL = [URL do deploy]
VITE_SITE_NAME = Geradores Brasil
```

## 🌐 PASSO 3: DEPLOY INICIAL

1. Clique em "Deploy"
2. Aguarde o build completar
3. Teste a URL temporária gerada
4. Verifique se todas as páginas funcionam

## 🔗 PASSO 4: DOMÍNIO CUSTOMIZADO


1. Adquira um domínio (Registro.br, GoDaddy, etc.)
2. Configure o DNS conforme instruções da plataforma
3. Adicione o domínio no painel do Vercel


## ✅ PASSO 5: VERIFICAÇÃO FINAL

- [ ] Site carregando corretamente
- [ ] Navegação entre páginas funcionando
- [ ] Formulários enviando dados
- [ ] Imagens carregando
- [ ] SEO meta tags presentes (verifique no DevTools)
- [ ] Schema.org validado (Google Rich Results Test)
- [ ] SSL/HTTPS ativo (cadeado verde)
- [ ] Performance ok (Lighthouse > 80)

## 📊 MONITORAMENTO (Opcional)

- [ ] Google Analytics configurado
- [ ] Google Search Console conectado
- [ ] Sitemap.xml enviado
- [ ] Robots.txt configurado

## 🔄 ATUALIZAÇÕES FUTURAS

Após o deploy inicial, qualquer push para a branch principal
será automaticamente deployado pelo Vercel.


## 📝 EDIÇÃO VIA CMS

Com o CMS configurado, você pode editar o conteúdo do site
diretamente pelo painel administrativo, sem precisar
alterar código ou fazer novo deploy.

1. Acesse o painel do CMS
2. Edite textos, imagens, cores
3. Salve as alterações
4. O site atualiza automaticamente!