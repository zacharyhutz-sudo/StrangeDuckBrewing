#!/usr/bin/env python3
"""Set real deployment URLs in this buildless site. Safe to rerun after a move."""
from pathlib import Path
from urllib.parse import urlsplit
from xml.sax.saxutils import escape
import argparse, html, json, re
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('url',help='Permanent public HTTPS base URL, including any repository path')
a=parser.parse_args()
base=a.url.rstrip('/')+'/'
u=urlsplit(base)
if u.scheme!='https' or not u.netloc or u.query or u.fragment or u.username or u.password:
 parser.error('Provide an HTTPS base URL without credentials, query or fragment.')
root=Path(__file__).resolve().parent.parent
pages=['index.html','about.html','drinks.html','contact.html']
for name in pages:
 p=root/name;s=p.read_text();url=base if name=='index.html' else base+name
 s=re.sub(r'<link rel="canonical"[^>]*>','',s)
 s=re.sub(r'<meta property="og:url"[^>]*>','',s)
 s=s.replace('</head>',f'<link rel="canonical" href="{html.escape(url,quote=True)}"><meta property="og:url" content="{html.escape(url,quote=True)}"></head>')
 s=re.sub(r'<meta property="og:image"[^>]*>',f'<meta property="og:image" content="{html.escape(base+"assets/images/social-cover.jpg",quote=True)}">',s)
 def update_schema(m):
  data=json.loads(m[1]);data['url']=base;data['image']=base+'assets/images/social-cover.jpg';return '<script type="application/ld+json">'+json.dumps(data)+'</script>'
 s=re.sub(r'<script type="application/ld\+json">(.*?)</script>',update_schema,s,flags=re.S)
 p.write_text(s)
items='\n'.join('<url><loc>'+escape(base if name=='index.html' else base+name)+'</loc></url>' for name in pages)
(root/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+items+'\n</urlset>\n')
(root/'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: '+base+'sitemap.xml\n')
# The standalone error page always returns to the configured site root.
p=root/'404.html';s=p.read_text();s=re.sub(r'(<a id="return-home" href=")[^"]*',lambda m:m[1]+html.escape(base,quote=True),s);p.write_text(s)
print('Updated canonical/social URLs, business URL, sitemap and robots.txt for '+base)
