const fs = require('fs');

function fixFile(file) {
  let text = fs.readFileSync(file, 'utf8');

  // We are going to replace inside mermaidChart content
  const regex = /mermaidChart:\s*`([\s\S]*?)`/g;
  
  text = text.replace(regex, (match, p1) => {
    let inner = p1;
    // Unescape first
    inner = inner.replace(/&lt;/g, '<');
    inner = inner.replace(/&gt;/g, '>');

    // Safely hide <br/>
    inner = inner.replace(/<br\/>/g, '___BR___');
    inner = inner.replace(/<br>/g, '___BR___');
    
    // Replace all < and >
    inner = inner.replace(/</g, '&lt;');
    inner = inner.replace(/>/g, '&gt;');

    // Put back arrows
    inner = inner.replace(/--&gt;/g, '-->');
    inner = inner.replace(/==&gt;/g, '==>');
    inner = inner.replace(/-\.-&gt;/g, '-.->');

    inner = inner.replace(/___BR___/g, '<br/>');
    return `mermaidChart: \`${inner}\``;
  });

  fs.writeFileSync(file, text);
}

fixFile('src/data/protocolsList3.ts');
fixFile('src/data/protocolsList4.ts');
fixFile('src/components/HypertensionDashboard.tsx');
