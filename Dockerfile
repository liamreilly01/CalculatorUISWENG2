FROM httpd:2.4
 
COPY ./calculator-app/ /usr/local/apache2/htdocs/
