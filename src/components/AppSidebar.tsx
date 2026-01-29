import { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Zap, 
  FolderOpen, 
  BookOpen, 
  Bot, 
  Briefcase, 
  Star, 
  DollarSign, 
  Gift, 
  Calendar, 
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'learning', label: 'Learning Journey', icon: BookOpen },
  { id: 'gpts', label: 'Custom GPTs', icon: Bot },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'testimonials', label: 'Testimonials', icon: Star },
  { id: 'pricing', label: 'Pricing', icon: DollarSign },
  { id: 'lead-magnet', label: 'Free Resources', icon: Gift },
  { id: 'consultation', label: 'Book Consultation', icon: Calendar },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const [activeSection, setActiveSection] = useState('home');
  const isCollapsed = state === 'collapsed';

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <Sidebar 
      collapsible="icon"
      className="border-r border-sidebar-border"
    >
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <span className="font-display font-bold text-xl text-gradient">
              PB
            </span>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? 'sr-only' : ''}>
            Navigate
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.id)}
                    isActive={activeSection === item.id}
                    tooltip={item.label}
                    className={`
                      transition-all duration-200 cursor-pointer
                      ${activeSection === item.id 
                        ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                        : 'hover:bg-sidebar-accent'
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {!isCollapsed && (
          <Button 
            onClick={() => scrollToSection('pricing')}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Session
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
