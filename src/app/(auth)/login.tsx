import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 40 }}>
          <View className="items-center mb-12">
            <View className="w-24 h-24 bg-blue-100 rounded-full items-center justify-center mb-6">
              <Text className="text-4xl font-bold text-blue-600">M</Text>
            </View>
            <Text className="text-4xl font-bold text-center text-gray-900 mb-4">
              Вход в систему
            </Text>
            <Text className="text-lg text-center text-gray-600">
              Введите свои данные для входа
            </Text>
          </View>

          <View className="space-y-6 mb-8">
            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">Email</Text>
              <TextInput
                className="bg-white p-4 rounded-xl border border-gray-200 text-gray-900"
                placeholder="Введите email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700 mb-2">Пароль</Text>
              <TextInput
                className="bg-white p-4 rounded-xl border border-gray-200 text-gray-900"
                placeholder="Введите пароль"
                secureTextEntry
              />
            </View>

            <TouchableOpacity className="items-end">
              <Text className="text-blue-600 font-medium">Забыли пароль?</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-4">
            <TouchableOpacity className="bg-blue-600 p-4 rounded-xl shadow-sm">
              <Text className="text-white text-center font-semibold text-lg">
                Войти
              </Text>
            </TouchableOpacity>
            
            <View className="flex-row justify-center space-x-2">
              <Text className="text-gray-600">Нет аккаунта?</Text>
              <Link href="/auth/register">
                <Text className="text-blue-600 font-medium">Зарегистрироваться</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
} 