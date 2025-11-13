import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CLIEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to devHari Terminal v1.0.0",
    "Type 'help' for available commands",
    ""
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const commands: Record<string, () => string> = {
    help: () => "Available commands: about, skills, projects, contact, sudo, clear, exit, neofetch, whoami",
    about: () => "AI/ML student | Python dev | CLI enthusiast | Photography nerd",
    skills: () => "Python, Machine Learning, Neural Networks, Linux, bash, Portrait Photography",
    projects: () => "Type 'ls projects' for project list",
    "ls projects": () => "- AI Projects\n- Photography Portfolio\n- More coming soon...",
    contact: () => "Email: youcallmehari01@gmail.com\nGitHub: @hxr4",
    sudo: () => "Nice try. You're not root here. 😏",
    "sudo apt install girlfriend": () => "Error: Package 'girlfriend' not found in any repository.\nDid you mean: 'loneliness'?",
    clear: () => "CLEAR",
    exit: () => "EXIT",
    neofetch: () => `
    ██████╗ ███████╗██╗   ██╗██╗  ██╗ █████╗ ██████╗ ██╗
    ██╔══██╗██╔════╝██║   ██║██║  ██║██╔══██╗██╔══██╗██║
    ██║  ██║█████╗  ██║   ██║███████║███████║██████╔╝██║
    ██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══██║██╔══██║██╔══██╗██║
    ██████╔╝███████╗ ╚████╔╝ ██║  ██║██║  ██║██║  ██║██║
    ╚═════╝ ╚══════╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝
    
    OS: Arch Linux (btw)
    Shell: bash 5.2.26
    Terminal: devHari-terminal
    Packages: sudo rm -rf / --no-preserve-root
    `,
    whoami: () => "root (just kidding, you're guest)",
    "rm -rf /": () => "Permission denied. Nice try though. 💀",
    "cat /dev/urandom": () => "�ӛ�f��Qc�k�2�R�... (Ctrl+C to stop)",
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd] 
      ? commands[trimmedCmd]() 
      : `Command not found: ${cmd}. Type 'help' for available commands.`;

    if (output === "CLEAR") {
      setHistory([]);
    } else if (output === "EXIT") {
      setIsOpen(false);
      setHistory([
        "Welcome to devHari Terminal v1.0.0",
        "Type 'help' for available commands",
        ""
      ]);
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, output, ""]);
    }
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl h-[600px] bg-black/90 border border-muted rounded-sm shadow-2xl overflow-hidden font-mono text-sm"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-muted">
              <span className="text-muted-foreground">devHari@terminal:~</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded transition-fast"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="h-[calc(100%-48px)] flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {history.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap text-foreground">
                    {line.startsWith("$") ? (
                      <span className="text-hero-accent">{line}</span>
                    ) : (
                      line
                    )}
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="px-4 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-hero-accent">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-foreground"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </motion.div>
          
          <div className="fixed bottom-4 right-4 text-xs text-muted-foreground font-mono">
            Press Ctrl+` to toggle
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CLIEasterEgg;
