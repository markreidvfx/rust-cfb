var searchIndex = {};
searchIndex["cfb"] = {"doc":"A library for reading/writing Compound File Binary (structured storage) files.  See MS-CFB for the format specification.","items":[[3,"Entries","cfb","An iterator over the entries in a storage object.",null,null],[3,"Entry","","Metadata about a single object (storage or stream) in a compound file.",null,null],[3,"CompoundFile","","A compound file, backed by an underlying reader/writer (such as a `File` or `Cursor`).",null,null],[3,"Stream","","A stream entry in a compound file, much like a filesystem file.",null,null],[4,"Version","","The CFB format version to use.",null,null],[13,"V3","","Version 3, which uses 512-byte sectors.",0,null],[13,"V4","","Version 4, which uses 4096-byte sectors.",0,null],[5,"open","","Opens an existing compound file at the given path in read-only mode.",null,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[5,"open_rw","","Opens an existing compound file at the given path in read-write mode.",null,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[5,"create","","Creates a new compound file with no contents at the given path.",null,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"entry"}}],[11,"name","","Returns the name of the object that this entry represents.",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"path","","Returns the full path to the object that this entry represents.",1,{"inputs":[{"name":"self"}],"output":{"name":"path"}}],[11,"is_stream","","Returns whether this entry is for a stream object (i.e. a \"file\" within the compound file).",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_storage","","Returns whether this entry is for a storage object (i.e. a \"directory\" within the compound file), either the root or a nested storage.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_root","","Returns whether this entry is specifically for the root storage object of the compound file.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"len","","Returns the size, in bytes, of the stream that this metadata is for.",1,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"clsid","","Returns the CLSID (that is, the object class GUID) for this object. This will always be all zeros for stream objects.",1,{"inputs":[{"name":"self"}],"output":{"name":"uuid"}}],[11,"state_bits","","Returns the user-defined bitflags set for this object.",1,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"created","","Returns the time when the object that this entry represents was created.",1,{"inputs":[{"name":"self"}],"output":{"name":"systemtime"}}],[11,"modified","","Returns the time when the object that this entry represents was last modified.",1,{"inputs":[{"name":"self"}],"output":{"name":"systemtime"}}],[11,"next","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"version"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"version"}],"output":{"name":"bool"}}],[11,"from_number","","Returns the version enum for the given version number, or `None`.",0,{"inputs":[{"name":"u16"}],"output":{"name":"option"}}],[11,"number","","Returns the version number for this version.",0,{"inputs":[{"name":"self"}],"output":{"name":"u16"}}],[11,"sector_shift","","Returns the sector shift used in this version.",0,{"inputs":[{"name":"self"}],"output":{"name":"u16"}}],[11,"sector_len","","Returns the length of sectors used in this version.",0,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"stream_len_mask","","Returns the bitmask used for reading stream lengths in this version.",0,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"dir_entries_per_sector","","Returns the number of directory entries per sector in this version.",0,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"version","","Returns the CFB format version used for this compound file.",3,{"inputs":[{"name":"self"}],"output":{"name":"version"}}],[11,"root_entry","","Returns information about the root storage object.  This is equivalent to `self.entry(\"/\").unwrap()` (but always succeeds).",3,{"inputs":[{"name":"self"}],"output":{"name":"entry"}}],[11,"entry","","Given a path within the compound file, get information about that stream or storage object.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"read_storage","","Returns an iterator over the entries within a storage object.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"walk_storage","","Returns an iterator over all entries under a storage subtree, including the given path itself.  The iterator walks the storage tree in a preorder traversal.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"exists","","Returns true if there is an existing stream or storage at the given path, or false if there is nothing at that path.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"bool"}}],[11,"is_stream","","Returns true if there is an existing stream at the given path, or false if there is a storage or nothing at that path.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"bool"}}],[11,"is_storage","","Returns true if there is an existing storage at the given path, or false if there is a stream or nothing at that path.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"bool"}}],[11,"into_inner","","Consumes the `CompoundFile`, returning the underlying reader/writer.",3,{"inputs":[{"name":"self"}],"output":{"name":"f"}}],[11,"open_stream","","Opens an existing stream in the compound file for reading and/or writing (depending on what the underlying file supports).",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"open","","Opens an existing compound file, using the underlying reader.  If the underlying reader also supports the `Write` trait, then the `CompoundFile` object will be writable as well.",3,{"inputs":[{"name":"f"}],"output":{"name":"result"}}],[11,"create","","Creates a new compound file with no contents, using the underlying reader/writer.  The reader/writer should be initially empty.",3,{"inputs":[{"name":"f"}],"output":{"name":"result"}}],[11,"create_with_version","","Creates a new compound file of the given version with no contents, using the underlying writer.  The writer should be initially empty.",3,{"inputs":[{"name":"version"},{"name":"f"}],"output":{"name":"result"}}],[11,"create_storage","","Creates a new, empty storage object (i.e. \"directory\") at the provided path.  The parent storage object must already exist.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"create_storage_all","","Recursively creates a storage and all of its parent storages if they are missing.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"remove_storage","","Removes the storage object at the provided path.  The storage object must exist and have no children.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"remove_storage_all","","Recursively removes a storage and all of its children.  If called on the root storage, recursively removes all of its children but not the root storage itself (which cannot be removed).",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"set_storage_clsid","","Sets the CLSID for the storage object at the provided path.  (To get the current CLSID for a storage object, use `self.entry(path)?.clsid()`.)",3,{"inputs":[{"name":"self"},{"name":"p"},{"name":"uuid"}],"output":{"name":"result"}}],[11,"create_stream","","Creates and returns a new, empty stream object at the provided path. If a stream already exists at that path, it will be replaced by the new stream.  The parent storage object must already exist.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"create_new_stream","","Creates and returns a new, empty stream object at the provided path. Returns an error if a stream already exists at that path.  The parent storage object must already exist.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"remove_stream","","Removes the stream object at the provided path.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"set_state_bits","","Sets the user-defined bitflags for the object at the provided path. (To get the current state bits for an object, use `self.entry(path)?.state_bits()`.)",3,{"inputs":[{"name":"self"},{"name":"p"},{"name":"u32"}],"output":{"name":"result"}}],[11,"touch","","Sets the modified time for the object at the given path to now.  Has no effect when called on the root storage.",3,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"flush","","Flushes all changes to the underlying file.",3,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"len","","Returns the current length of the stream, in bytes.",4,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"set_len","","Truncates or extends the stream, updating the size of this stream to become `size`.",4,{"inputs":[{"name":"self"},{"name":"u64"}],"output":{"name":"result"}}],[11,"seek","","",4,{"inputs":[{"name":"self"},{"name":"seekfrom"}],"output":{"name":"result"}}],[11,"read","","",4,null],[11,"write","","",4,null],[11,"flush","","",4,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"drop","","",4,{"inputs":[{"name":"self"}],"output":null}]],"paths":[[4,"Version"],[3,"Entry"],[3,"Entries"],[3,"CompoundFile"],[3,"Stream"]]};
initSearch(searchIndex);
