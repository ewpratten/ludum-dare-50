(function() {var implementors = {};
implementors["bincode"] = [{"text":"impl&lt;'storage&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bincode/de/read/struct.SliceReader.html\" title=\"struct bincode::de::read::SliceReader\">SliceReader</a>&lt;'storage&gt;","synthetic":false,"types":["bincode::de::read::SliceReader"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bincode/de/read/struct.IoReader.html\" title=\"struct bincode::de::read::IoReader\">IoReader</a>&lt;R&gt;","synthetic":false,"types":["bincode::de::read::IoReader"]}];
implementors["zstd"] = [{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/read/struct.Decoder.html\" title=\"struct zstd::stream::read::Decoder\">Decoder</a>&lt;'_, R&gt;","synthetic":false,"types":["zstd::stream::read::Decoder"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/read/struct.Encoder.html\" title=\"struct zstd::stream::read::Encoder\">Encoder</a>&lt;'_, R&gt;","synthetic":false,"types":["zstd::stream::read::Encoder"]},{"text":"impl&lt;R, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"zstd/stream/zio/struct.Reader.html\" title=\"struct zstd::stream::zio::Reader\">Reader</a>&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"zstd/stream/raw/trait.Operation.html\" title=\"trait zstd::stream::raw::Operation\">Operation</a>,&nbsp;</span>","synthetic":false,"types":["zstd::stream::zio::reader::Reader"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()