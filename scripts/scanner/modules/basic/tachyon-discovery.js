var module = {
  name: "Tachyon Web Discovery checks",
  category: "basic"
};

function run(ctx) {
  var ps = ctx.pathState;
  if (ps.isParametric()) {
      return; // nothing to do!
  }
  for(var i=0; i<tachyon_files.length; i++){
      var altered = ps.createAlteredRequest("/" + tachyon_files[i].url, true);
      ctx.debug("Tachyon wants to add " + altered.getURI());
      ctx.submitRequest(altered, process);
  }
}

function process(request, response, ctx) {
  var files=[];
  var url = request.getRequestLine().getUri().toString();
  ctx.debug("Tachyon found " + url);
  for(var i=0; i<tachyon_files.length; i++) {
    var suffix = "/" + tachyon_files[i].url;
    if(url.lastIndexOf(suffix) + suffix.length === url.length){
      // got a match, reusing vdirlist to report error
      ctx.alert("vdirlist", request, response, {
        output: tachyon_files[i].description,
        key: "vdirlist:" + request.requestLine.uri,
        resource: request.requestLine.uri
      });
    }
  }
}

var tachyon_files = [
// Tachyon - Fast Multi-Threaded Web Discovery Tool
// Copyright (c) 2011 Gabriel Tremblay - initnull hat gmail.com
//
// GNU General Public Licence (GPL)
//
// This program is free software; you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation; either version 2 of the License, or (at your option) any later
// version.
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
// details.
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 59 Temple
// Place, Suite 330, Boston, MA  02111-1307  USA

{"url" : "access", "description" : "access log"},
{"url" : "account", "description" : "Accounts"},
{"url" : "accounts", "description" : "Accounts"},
{"url" : "authors", "description" : "Accounts"},
{"url" : "akeeba.backend.log", "description" : "Akeeba backup transation logs", "no_suffix": true},
{"url" : "analog.html", "description" : "Analog web statistics", "no_suffix": true},
{"url" : "admin", "description" : "Admin file"},
{"url" : "administrators", "description" : "Admin file"},
{"url" : "administration", "description" : "Admin file"},
{"url" : "application", "description" : "Application file"},
{"url" : "application.wadl", "description" : "REST API description file", "no_suffix": true},
{"url" : "authors", "description" : "Password file"},
{"url" : "auth", "description" : "auth file"},
{"url" : "authuser", "description" : "auth file"},
{"url" : "authusers", "description" : "auth file"},
{"url" : "archive", "description" : "archive file"},
{"url" : "archives", "description" : "archive file"},
{"url" : "backup", "description" : "backup"},
{"url" : "bar", "description" : "random backup"},
{"url" : "browser", "description" : "Browser-oriented file"},
{"url" : "cache", "description" : "Cache related file"},
{"url" : "caching", "description" : "Cache related file"},
{"url" : "cachemgr.cgi", "description" : "Squid proxy admin interface", "no_suffix": true},
{"url" : "ccbill", "description" : "CCBill.com logs"},
{"url" : "fckeditor", "description" : "CkEditor"},
{"url" : "config", "description" : "Config file"},
{"url" : "conf", "description" : "Config file"},
{"url" : "common", "description" : "Config file"},
{"url" : "cron", "description" : "crontab file"},
{"url" : "crossdomain.xml", "description" : "Crossdomain policy file", "no_suffix": true},
{"url" : "crypt", "description" : "encryption file"},
{"url" : "crypto", "description" : "encryption file"},
{"url" : "data", "description" : "database backup"},
{"url" : "database", "description" : "database backup"},
{"url" : "db", "description" : "database backup"},
{"url" : "default", "description" : "default file"},
{"url" : "deploy", "description" : "Site backup"},
{"url" : "digest", "description" : "digest file"},
{"url" : "dokuwiki", "description" : "Dokuwiki backup"},
{"url" : "encrypt", "description" : "encryption file"},
{"url" : "error", "description" : "error log"},
{"url" : "errors", "description" : "errors log"},
{"url" : "export", "description" : "database backup"},
{"url" : "foo", "description" : "random backup"},
{"url" : "files", "description" : "files reference"},
{"url" : "global", "description" : "global settings"},
{"url" : ".htaccess", "description" : "htacces file", "no_suffix": true},
{"url" : ".hta", "description" : "htacces file", "no_suffix": true},
{"url" : ".htpasswd", "description" : "htpasswd file", "no_suffix": true},
{"url" : "id_rsa", "description" : "rsa private key", "no_suffix": true},
{"url" : "id_rsa.pub", "description" : "rsa public key", "no_suffix": true},
{"url" : "known_hosts", "description" : "ssh known hosts", "no_suffix": true},
{"url" : "import", "description" : "database backup"},
{"url" : "index", "description" : "index.php backup"},
{"url" : "install", "description" : "install file"},
{"url" : "info", "description" : "info file"},
{"url" : "infos", "description" : "info file"},
{"url" : "key", "description" : "key file"},
{"url" : "keys", "description" : "key file"},
{"url" : "local", "description" : "Local config"},
{"url" : "login", "description" : "login log (login.txt could be Gallery key)"},
{"url" : "log", "description" : "Log file"},
{"url" : "logs", "description" : "Log file"},
{"url" : "logfile", "description" : "Log file"},
{"url" : "logger", "description" : "Log file"},
{"url" : "master", "description" : "master file"},
{"url" : "main.mdb", "description" : "ASP-Nuke db", "no_suffix": true},
{"url" : "mysql", "description" : "Mysql config"},
{"url" : "my", "description" : "Mysql config"},
{"url" : "memcached", "description" : "memcached monitoring"},
{"url" : "note", "description" : "notes file"},
{"url" : "notes", "description" : "notes file"},
{"url" : "pass", "description" : "Password file"},
{"url" : "password", "description" : "password file"},
{"url" : "passwords", "description" : "password file"},
{"url" : "passwd", "description" : "Password file"},
{"url" : ".passwd", "description" : "Password file", "no_suffix": true},
{"url" : "php", "description" : "php config"},
{"url" : "proftpd", "description" : "ProFTPD config"},
{"url" : "pixelpost", "description" : "Pixelpost config"},
{"url" : "pmwiki", "description" : "pmwiki file"},
{"url" : "putty", "description" : "PuTTY logs"},
{"url" : "putty.reg", "description" : "PuTTY logs", "no_suffix": true},
{"url" : "register", "description" : "Register file"},
{"url" : "redis", "description" : "redis monitoring"},
{"url" : "rsync", "description" : "Remote sync file"},
{"url" : "service", "description" : "Password file"},
{"url" : "server", "description" : "server file"},
{"url" : "settings", "description" : "settings file"},
{"url" : "site", "description" : "database backup"},
{"url" : "stats", "description" : "statistic file"},
{"url" : "test", "description" : "test dir/file"},
{"url" : "test_db", "description" : "database backup"},
{"url" : "transactions", "description" : "transactions log"},
{"url" : "transaction", "description" : "transactions log"},
{"url" : "user", "description" : "username file"},
{"url" : "users", "description" : "usernames file"},
{"url" : "usernames", "description" : "usernames file"},
{"url" : "username", "description" : "usernames file"},
{"url" : "WS_FTP.LOG", "description" : "WS_FTP client logs", "no_suffix": true},
{"url" : "ws_ftp", "description" : "WS_FTP client config"},
{"url" : "xmlrpc.php", "description" : "Website API", "no_suffix": true},
{"url" : "xml-rpc", "description" : "Website API"},
{"url" : "rpc", "description" : "Website API"},
{"url" : "json", "description" : "Website API"},
{"url" : "json-api", "description" : "Website API"},
{"url" : "web", "description" : "Web file"},


//////
// No suffix specific files
// Put files with problematic extensions here (.php, .asp etc..)
////

// PHP common developer files
{"url" : "info.php", "description" : "Common phpinfo() wrapper script", "match_string" : "PHPE9568F34-D428-11d2-A769-00AA001ACF42", "no_suffix": true},
{"url" : "infos.php", "description" : "Common phpinfo() wrapper script", "match_string" : "PHPE9568F34-D428-11d2-A769-00AA001ACF42", "no_suffix": true},
{"url" : "phpinfo.php", "description" : "Common phpinfo() wrapper script", "match_string" : "PHPE9568F34-D428-11d2-A769-00AA001ACF42", "no_suffix": true},
{"url" : "phpinfos.php", "description" : "Common phpinfo() wrapper script", "match_string" : "PHPE9568F34-D428-11d2-A769-00AA001ACF42", "no_suffix": true},

// Home shell temporary files
{"url" : ".bash_history", "description" : "Bash history", "no_suffix": true},
{"url" : ".bashrc", "description" : "Bash default config file", "no_suffix": true},
{"url" : ".config", "description" : "Generic config", "no_suffix": true},
{"url" : ".mysql_history", "description" : "mysql history", "no_suffix": true},
{"url" : ".profile", "description" : "Common default shell config file", "no_suffix": true},
{"url" : ".sh_history", "description" : "sh history", "no_suffix": true},

// Common guess we don't want to be appended with suffixes
{"url" : "index2.php", "description" : "Backup index page", "no_suffix": true},
{"url" : "index3.php", "description" : "Backup index page", "no_suffix": true},

// Svn entries file
{"url" : ".svn/entries", "description" : "SVN entries file", "no_suffix": true},

// Frontpage
{"url": "_vti_bin/_vti_adm/admin.dll", "description": "Frontpage file", "no_suffix": true},
{"url": "_vti_bin/_vti_aut/author.dll", "description": "Frontpage file", "no_suffix": true},
{"url": "_vti_bin/shtml.dll", "description": "Frontpage file", "no_suffix": true},
 
// CVS
{"url": "CVS/Entries", "description": "CVS entries file", "no_suffix": true},
{"url": "CVS/Root", "description": "CVS root file", "no_suffix": true},
{"url": "CVS/Repository", "description": "CVS repository file", "no_suffix": true},
 
// git
{"url": ".git/HEAD", "description": "git HEAD file", "no_suffix": true},

// Listing files
{"url": ".listing", "description": "File/Dir Listing", "no_suffix": true},
{"url": ".listings", "description": "File/Dir Listing", "no_suffix": true},

// Awstats
{"url": "awstats.conf", "description": "AWstats log analyzer", "no_suffix": true},

// Seldom admin script
{"url": "admin.php", "description": "Admin script", "no_suffix": true},
{"url": "admin.cgi", "description": "Admin script", "no_suffix": true},
{"url": "admin.pl", "description": "Admin script", "no_suffix": true},

// Various
{"url": "showcode.asp", "description": "Possible file access", "no_suffix": true},
{"url": "getFile.cfm", "description": "Possible file access", "no_suffix": true},
{"url": "AT-admin.cgi", "description": "Possible file access", "no_suffix": true},

// Ruby logger
{"url": "development.log  ", "description": "Ruby logger", "no_suffix": true},
{"url": "production.log", "description": "Ruby logger", "no_suffix": true},

// Executables

// cache monitoring
{"url" : "apc", "description" : "Zend cache monitoring", "executable" : true},
{"url" : "memcached", "description" : "memcached monitoring", "executable" : true},
{"url" : "redis", "description" : "redis monitoring", "executable" : true},
{"url" : "cachemgr", "description" : "cache manager", "executable" : true},

// Upload/Download management Scripts - Executables
{"url": "download", "description": "Possible file access", "executable" : true},
{"url": "readfile", "description": "Possible file access", "executable" : true},
{"url": "getfile", "description": "Possible file access", "executable" : true},
{"url": "get", "description": "Possible file access", "executable" : true},
{"url": "show", "description": "Possible file access", "executable" : true},
{"url": "forcedownload", "description": "Possible file access", "executable" : true},
{"url": "upload", "description": "Possible file access", "executable" : true},
{"url": "uploadfile", "description": "Possible file access", "executable" : true},
{"url": "uploader", "description": "Possible file access", "executable" : true},
{"url": "upload_file", "description": "Possible file access", "executable" : true},
{"url": "view", "description": "Possible file access", "executable" : true},
{"url": "viewfile", "description": "Possible file access", "executable" : true},
{"url": "source", "description": "Possible file access", "executable" : true}
];