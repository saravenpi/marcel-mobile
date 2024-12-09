import { Pressable, StyleSheet, PressableProps } from 'react-native';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface ButtonProps extends PressableProps {
  children: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const backgroundColor = useThemeColor(
    { light: variant === 'primary' ? '#000' : '#fff',
      dark: variant === 'primary' ? '#fff' : '#171717' },
    'background'
  );
  
  const textColor = useThemeColor(
    { light: variant === 'primary' ? '#fff' : '#000',
      dark: variant === 'primary' ? '#000' : '#fff' },
    'text'
  );

  return (
    <Pressable 
      style={[styles.button, { backgroundColor }]} 
      {...props}
    >
      <ThemedText style={[styles.text, { color: textColor }]}>
        {children}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  text: {
    fontWeight: '600',
  },
}); 