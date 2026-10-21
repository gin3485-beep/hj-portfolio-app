const fs = require('fs');
const path = require('path');
const walk = (d) => {
  let list = [];
  fs.readdirSync(d).forEach(f => {
    let p = path.join(d, f);
    if(fs.statSync(p).isDirectory()) list = list.concat(walk(p));
    else if(p.endsWith('.tsx') || p.endsWith('.ts')) list.push(p);
  });
  return list;
};
let files = walk('./src');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // replace mobile sizes (<14px) with text-sm (14px)
  let nc = c.replace(/(^|\s|\"|\'|\>|\`)text-(?:xs|\[9px\]|\[10px\]|\[11px\]|\[12px\]|\[13px\]|\[0\.7rem\]|\[0\.75rem\]|\[0\.8rem\]|\[0\.85rem\])(?=[\s\"\'\<\`])/g, '$1text-sm');
  // replace md/lg/sm sizes (<16px) with text-base (16px)
  nc = nc.replace(/(md|lg|sm):text-(?:xs|sm|\[9px\]|\[10px\]|\[11px\]|\[12px\]|\[13px\]|\[14px\]|\[15px\]|\[0\.7rem\]|\[0\.75rem\]|\[0\.8rem\]|\[0\.85rem\]|\[0\.9rem\]|\[0\.95rem\])(?=[\s\"\'\<\`])/g, '$1:text-base');
  if(c !== nc) {
    fs.writeFileSync(f, nc);
    console.log('Updated font sizes in ' + f);
  }
});
