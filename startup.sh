echo "Instalando dependencias"

bundle install

echo "Subindo Jekyll"

bundle exec jekyll serve --host 0.0.0.0
